import EventEmitter from '../event-emitter.js'

import {
  clone, compileTemplate, different,
  equal,
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
     * A reference to the Jedison instance to which this instance belongs.
     * @type {Jedison}
     */
    this.jedison = config.jedison

    /**
     * The schema path of this instance.
     * @type {string}
     */
    this.path = config.path || this.jedison.rootName

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

    this.key = this.path.split(this.jedison.pathSeparator).pop()

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
    this.setValueFormTemplate()

    if (this.jedison.options.container) {
      this.setUI()
    }

    this.on('notifyParent', (initiator) => {
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
    if (this.jedison.isEditor) {
      const EditorClass = this.jedison.uiResolver.getClass(this.schema)
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
    this.jedison.register(this)

    if (this.children.length === 0) return

    const registerChildRecursive = (child) => {
      this.jedison.register(child)
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
    this.jedison.unregister(this)
  }

  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue () {
    const schemaEnforceEnumDefault = getSchemaXOption(this.schema, 'enforceEnumDefault') // todo: deprecated
    const schemaEnforceEnum = getSchemaXOption(this.schema, 'enforceEnum')
    const enforceEnumDefault = schemaEnforceEnumDefault ?? this.jedison.options.enforceEnumDefault // todo: deprecated
    const enforceEnum = schemaEnforceEnum ?? this.jedison.options.enforceEnum
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

    const enforceConst = getSchemaXOption(this.schema, 'enforceConst') ?? this.jedison.options.enforceConst

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
      this.jedison.watch(path, () => {
        this.updateWatchedData(name, path)
      })
    })
  }

  updateWatchedData (name, path) {
    const instance = this.jedison.getInstance(path)

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
  }

  setValueFormTemplate () {
    const template = getSchemaXOption(this.schema, 'template')

    if (!isSet(template)) return

    if (template) {
      this.setValue(compileTemplate(template, this.watched))
    }
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
  setValue (newValue, notifyParent = true, initiator = 'api') {
    const enforceConst = getSchemaXOption(this.schema, 'enforceConst') ?? this.jedison.options.enforceConst

    if (isSet(enforceConst) && equal(enforceConst, true)) {
      const schemaConst = getSchemaConst(this.schema)

      if (isSet(schemaConst)) {
        newValue = schemaConst
      }
    }

    const valueChanged = different(this.value, newValue)

    this.value = newValue

    this.emit('set-value', newValue, initiator)

    if (notifyParent) {
      this.emit('notifyParent', initiator)
    }

    if (valueChanged) {
      this.isDirty = true
      this.emit('change', initiator)
      this.jedison.emit('instance-change', this, initiator)
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

    const errors = this.jedison.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path)

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
      this.emit('notifyParent')
    }
  }

  /**
   * Deactivates the instance
   */
  deactivate () {
    if (this.isActive === true) {
      this.isActive = false
      this.emit('notifyParent')
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
