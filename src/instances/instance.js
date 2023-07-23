import EventEmitter from '../event-emitter'
import { isSet } from '../utils'

/**
 * Represents a JSON instance.
 */
class Instance extends EventEmitter {
  constructor (config) {
    super()

    /**
     * A reference to the Jedi instance to which this instance belongs.
     * @type {Jedi}
     * @private
     */
    this.jedi = config.jedi

    /**
     * A JSON schema.
     * @type {boolean|object}
     * @private
     */
    this.schema = config.schema

    /**
     * The json value of this instance.
     * @type {*}
     * @private
     */
    this.value = config.value || undefined

    /**
     * The active state of this instance. If false the editor is not participating
     * to the value.
     * @type {boolean}
     * @private
     */
    this.isActive = true

    /**
     * The schema path of this instance.
     * @type {string}
     * @private
     */
    this.path = config.path || this.jedi.rootName

    /**
     * The Parent instance of this instance.
     * @type {Instance|null}
     * @private
     */
    this.parent = config.parent || null

    /**
     * Child instances of this instance.
     * @type {Instance[]}
     * @private
     */
    this.children = []

    /**
     * The editor controlling this Instance if any
     * @type {Editor|null}
     * @private
     */
    this.ui = null

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

    if (this.jedi.options.isEditor) {
      this.setUI()
    }

    this.on('change', () => {
      if (this.parent) {
        this.parent.onChildChange()
      }
    })
  }

  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI () {}

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
    let value

    if (this.schema.type() === 'boolean') value = false
    if (this.schema.type() === 'number') value = 0.0
    if (this.schema.type() === 'integer') value = 0
    if (this.schema.type() === 'string') value = ''
    if (this.schema.type() === 'array') value = []
    if (this.schema.type() === 'object') value = {}
    if (this.schema.type() === 'null') value = null

    this.value = value
  }

  setDefaultValue () {
    // if (this.schema.enum() && isSet(this.schema.enum()[0])) {
    //   this.value = this.schema.enum()[0]
    // }

    if (isSet(this.schema.default())) {
      if (isSet(this.schema.enum()) && !this.schema.enum().includes(this.schema.default())) {
        return
      }

      const defaultErrors = this.jedi.validator.getErrors(this.schema.default(), this.schema, this.getKey(), this.path)
      const validDefault = defaultErrors.length === 0

      if (validDefault) {
        this.setValue(this.schema.default(), false)
      }
    }
  }

  /**
   * Returns the value of the instance
   */
  getValue () {
    return this.value
  }

  /**
   * Sets the instance value
   */
  setValue (newValue, triggersChange = true) {
    this.value = newValue
    this.emit('set-value')

    if (triggersChange) {
      this.emit('change')
    }
  }

  /**
   * Fires when a child's instance state changes
   */
  onChildChange () {
  }

  /**
   * Returns an array of validation error messages
   */
  getErrors () {
    if (!this.isActive) {
      return []
    }

    return this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path)
  }

  /**
   * Prepare data before building the editor
   */
  prepare () {}

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
   * Destroy the instance and it's children
   */
  destroy () {
    this.children.forEach((child) => {
      child.destroy()
    })

    this.unregister()

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
