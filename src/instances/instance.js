import EventEmitter from '../event-emitter'

class Instance extends EventEmitter {
  constructor (config) {
    super()
    this.jedi = config.jedi
    this.schema = config.schema
    this.value = config.value || undefined
    this.isActive = true
    this.path = config.path || this.jedi.options.rootName
    this.parent = config.parent || null
    this.children = []
    this.ui = null
    this.init()
  }

  /**
   * Initializes and register the instance
   */
  init () {
    this.register()
    this.setDefaultValue()
    this.prepare()

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
    return this.path.split('.').pop()
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
   * Sets the default value of the instance based on it'S schema
   */
  setDefaultValue () {
    let value

    if (this.schema.type() === 'boolean') value = false
    if (this.schema.type() === 'number') value = 0.0
    if (this.schema.type() === 'integer') value = 0
    if (this.schema.type() === 'string') value = ''
    if (this.schema.type() === 'array') value = []
    if (this.schema.type() === 'object') value = {}
    if (this.schema.type() === 'null') value = null

    // if (this.schema.enum()) {
    //   value = this.schema.enum()[0]
    // }

    if (this.schema.default()) {
      if (this.schema.enum() && !this.schema.enum().includes(this.schema.default())) {
        return
      }

      value = this.schema.default()
    }

    this.value = value
  }

  /**
   * Returns the value of the instance
   */
  getValue () {
    return this.value
  }

  /**
   * Transforms the input value if necessary before value set
   */
  sanitize (value) {
    return value
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
  validate () {
    if (!this.isActive) {
      return []
    }

    return this.jedi.validator.validate(this.getValue(), this.schema, this.getKey(), this.path)
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
  }
}

export default Instance
