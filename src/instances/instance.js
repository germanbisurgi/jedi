import EventEmitter from '../event-emitter.js'

import {
  clone, compileTemplate, different,
  equal,
  getValueByJSONPath,
  isSet,
  notSet,
  removeDuplicatesFromArray
} from '../helpers/utils.js'

import {
  getSchemaConst,
  getSchemaDefault, getSchemaEnum,
  getSchemaReadOnly,
  getSchemaType, getSchemaXOption
} from '../helpers/schema.js'

/**
 * Represents a JSON instance.
 */
class Instance extends EventEmitter {
  constructor (config) {
    super()

    /**
     * A reference to the Jedi instance to which this instance belongs.
     * @type {Jedi}
     */
    this.jedi = config.jedi

    /**
     * The schema path of this instance.
     * @type {string}
     */
    this.path = config.path || this.jedi.rootName

    /**
     * A JSON schema.
     * @type {boolean|object}
     */
    this.schema = config.schema

    /**
     * The json value of this instance.
     * @type {*}
     */
    this.value = isSet(config.value) ? config.value : undefined

    /**
     * The active state of this instance. If false the editor is not participating
     * in the value.
     * @type {boolean}
     */
    this.isActive = true

    /**
     * The Parent instance of this instance.
     * @type {Instance|null}
     */
    this.parent = config.parent || null

    /**
     * Child instances of this instance.
     * @type {Instance[]}
     */
    this.children = []

    /**
     * The editor controlling this Instance if any
     * @type {Editor|null}
     */
    this.ui = null

    /**
     * Indicates whether the instance value changed.
     * @type {boolean}
     */
    this.isDirty = false

    this.watched = {}

    this.enumSource = null

    this.key = this.path.split(this.jedi.pathSeparator).pop()

    this.init()
  }

  /**
   * Initializes and register the instance
   */
  init () {
    this.register()
    this.setInitialValue()
    this.prepare()
    this.setDefaultValue()

    this.registerWatcher()
    this.setEnumSource()
    this.setValueFormTemplate()
    this.setValueFormCalc()

    if (this.jedi.options.container) {
      this.setUI()
    }

    this.on('change', (initiator) => {
      if (this.parent) {
        this.parent.isDirty = true
        this.parent.onChildChange(initiator)
      }
    })
  }

  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI () {
    if (this.jedi.isEditor) {
      const EditorClass = this.jedi.uiResolver.getClass(this.schema)
      this.ui = new EditorClass(this)
    }
  }

  /**
   * Return the last part of the instance path
   */
  getKey () {
    return this.key
  }

  /**
   * Return the instance schema
   */
  getSchema () {
    return this.schema
  }

  /**
   * Adds a child instance pointer to the instances list
   */
  register () {
    this.jedi.register(this)

    if (this.children.length === 0) return

    const registerChildRecursive = (child) => {
      this.jedi.register(child)
      if (child.children.length > 0) {
        child.children.forEach(registerChildRecursive)
      }
    }

    this.children.forEach(registerChildRecursive)
  }

  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister () {
    this.jedi.unregister(this)
  }

  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue () {
    const schemaEnforceEnumDefault = getSchemaXOption(this.schema, 'enforceEnumDefault') // todo: deprecated
    const schemaEnforceEnum = getSchemaXOption(this.schema, 'enforceEnum')
    const enforceEnumDefault = schemaEnforceEnumDefault ?? this.jedi.options.enforceEnumDefault // todo: deprecated
    const enforceEnum = schemaEnforceEnum ?? this.jedi.options.enforceEnum
    const finalEnforceEnum = isSet(schemaEnforceEnum) ? enforceEnum : enforceEnumDefault // todo: remove this after deprecation
    const schemaEnum = getSchemaEnum(this.schema)

    if (isSet(schemaEnum) && !schemaEnum.includes(this.getValue()) && isSet(schemaEnum[0]) && finalEnforceEnum) {
      this.setValue(schemaEnum[0], false)
    }

    if (notSet(this.value)) {
      let value
      const schemaType = getSchemaType(this.schema)

      if (schemaType === 'boolean') value = false
      if (schemaType === 'number') value = 0.0
      if (schemaType === 'integer') value = 0
      if (schemaType === 'string') value = ''
      if (schemaType === 'array') value = []
      if (schemaType === 'object') value = {}
      if (schemaType === 'null') value = null

      this.value = value
    }
  }

  setDefaultValue () {
    const schemaDefault = getSchemaDefault(this.schema)

    if (isSet(schemaDefault)) {
      this.setValue(schemaDefault, false)
    }

    const enforceConst = this.jedi.options.enforceConst || getSchemaXOption(this.schema, 'enforceConst')

    if (isSet(enforceConst) && equal(enforceConst, true)) {
      const schemaConst = getSchemaConst(this.schema)

      if (isSet(schemaConst)) {
        this.setValue(schemaConst, false)
      }
    }
  }

  registerWatcher () {
    const watch = getSchemaXOption(this.schema, 'watch')

    if (!isSet(watch)) return

    Object.entries(watch).forEach(([name, path]) => {
      this.jedi.watch(path, () => {
        this.updateWatchedData(name, path)
      })
    })
  }

  updateWatchedData (name, path) {
    const instance = this.jedi.getInstance(path)

    if (!isSet(instance)) {
      return
    }

    if (instance) {
      this.watched[name] = {
        value: instance.getValue(),
        schema: instance.getSchema(),
        properties: instance.schema.properties ? Object.keys(instance.schema.properties) : []
      }
    }

    this.setValueFormTemplate()
    this.setValueFormCalc()
  }

  setValueFormTemplate () {
    const template = getSchemaXOption(this.schema, 'template')

    if (!isSet(template)) return

    if (template) {
      this.setValue(compileTemplate(template, this.watched))
    }
  }

  setValueFormCalc () {
    const calc = getSchemaXOption(this.schema, 'calc')
    if (!isSet(calc) || !window.math) return

    try {
      // Just values are needed
      const scope = Object.fromEntries(
        Object.entries(this.watched).map(([key, value]) => [key, value.value])
      )

      const cacheKey = JSON.stringify(scope)

      if (this.lastCalc && this.lastCalc.key === cacheKey) {
        this.setValue(this.lastCalc.result)
        return
      }

      const result = window.math.evaluate(calc, scope)
      this.lastCalc = { key: cacheKey, result }
      this.setValue(result)
    } catch (e) {
    }
  }

  setEnumSource () {
    const enumSource = getSchemaXOption(this.schema, 'enumSource')

    if (!isSet(enumSource)) return

    this.enumSource = getValueByJSONPath(this.watched, enumSource)
  }

  /**
   * Returns the value of the instance
   */
  getValue () {
    return clone(this.value)
  }

  /**
   * Sets the instance value
   */
  setValue (newValue, triggersChange = true, initiator = 'api') {
    const enforceConst = this.jedi.options.enforceConst || getSchemaXOption(this.schema, 'enforceConst')

    if (isSet(enforceConst) && equal(enforceConst, true)) {
      const schemaConst = getSchemaConst(this.schema)

      if (isSet(schemaConst)) {
        newValue = schemaConst
      }
    }

    const valueChanged = different(this.value, newValue)

    this.value = newValue

    this.emit('set-value', newValue, initiator)

    if (triggersChange && valueChanged) {
      this.isDirty = true
      this.emit('change', initiator)
      this.jedi.emit('instance-change', this, initiator)
    }
  }

  /**
   * Fires when a child's instance state changes
   */
  onChildChange (initiator) {
  }

  /**
   * Returns an array of validation error messages
   */
  getErrors () {
    if (!this.isActive) {
      return []
    }

    const errors = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path)

    return removeDuplicatesFromArray(errors)
  }

  /**
   * Prepare data before building the editor
   */
  prepare () {
  }

  /**
   * Activates the instance
   */
  activate () {
    if (this.isActive === false) {
      this.isActive = true
      this.emit('change')
    }
  }

  /**
   * Deactivates the instance
   */
  deactivate () {
    if (this.isActive === true) {
      this.isActive = false
      this.emit('change')
    }
  }

  /**
   * Returns true if this instance is read only
   */
  isReadOnly () {
    if (getSchemaReadOnly(this.schema) === true) {
      return true
    }

    return this.parent ? this.parent.isReadOnly() : false
  }

  /**
   * Destroy the instance and it's children
   */
  destroy () {
    this.unregister()

    this.listeners = null

    if (this.children.length > 0) {
      this.children.forEach((child) => child.destroy())
      this.children = []
    }

    if (this.ui) {
      this.ui.destroy()
      this.ui = null
    }

    Object.keys(this).forEach((key) => {
      this[key] = null
    })

    super.destroy()
  }
}

export default Instance
