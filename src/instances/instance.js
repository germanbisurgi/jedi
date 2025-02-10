import EventEmitter from '../event-emitter.js'

import {
  clone,
  equal,
  isSet,
  notSet,
  removeDuplicatesFromArray
} from '../helpers/utils.js'

import {
  getSchemaConst,
  getSchemaDefault,
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

    if (this.jedi.options.container) {
      this.setUI()
    }

    this.on('change', (context) => {
      if (this.parent) {
        this.parent.isDirty = true
        this.parent.onChildChange(context)
      }
    })
  }

  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI () {
    const EditorClass = this.jedi.uiResolver.getClass(this.schema)
    this.ui = new EditorClass(this)
  }

  /**
   * Return the last part of the instance path
   */
  getKey () {
    return this.path.split(this.jedi.pathSeparator).pop()
  }

  /**
   * Adds a child instance pointer to the instances list
   */
  register () {
    this.jedi.register(this)

    const registerChildRecursive = (child) => {
      this.jedi.register(child)
      child.children.forEach(registerChildRecursive)
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

  /**
   * Returns the value of the instance
   */
  getValue () {
    return clone(this.value)
  }

  /**
   * Sets the instance value
   */
  setValue (newValue, triggersChange = true, context = 'instance') {
    const enforceConst = this.jedi.options.enforceConst || getSchemaXOption(this.schema, 'enforceConst')

    if (isSet(enforceConst) && equal(enforceConst, true)) {
      const schemaConst = getSchemaConst(this.schema)

      if (isSet(schemaConst)) {
        newValue = schemaConst
      }
    }

    this.value = newValue

    this.emit('set-value', newValue, context)

    if (triggersChange) {
      this.isDirty = true
      this.emit('change', context)
      this.jedi.emit('instance-change', this, context)
    }
  }

  /**
   * Fires when a child's instance state changes
   */
  onChildChange (context) {
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
    let readOnly = false

    if (getSchemaReadOnly(this.schema) === true) {
      readOnly = true
    }

    if (this.parent && this.parent.isReadOnly()) {
      readOnly = true
    }

    return readOnly
  }

  /**
   * Destroy the instance and it's children
   */
  destroy () {
    this.unregister()

    this.listeners = []

    this.children.forEach((child) => {
      child.destroy()
    })

    if (this.ui) {
      this.ui.destroy()
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })

    super.destroy()
  }
}

export default Instance
