import EventEmitter from './event-emitter'

class Instance extends EventEmitter {
  constructor (config) {
    super()
    this.jedi = config.jedi
    this.schema = config.schema
    this.value = config.value || undefined
    this.path = config.path || 'root'
    this.parent = config.parent || null
    this.childEditors = []
    this.ui = null
    this.init()
  }

  /**
   * Starts the build pipeline of the editor
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
        this.parent.onChildEditorChange()
      }
    })
  }

  setUI () {}

  /**
   * Return the last part of the path
   */
  getKey () {
    return this.path.split('.').pop()
  }

  /**
   * Adds this editor instance in the jedi.editors object
   */
  register () {
    this.jedi.registerEditor(this)
  }

  /**
   * Removes this editor instance from the jedi.editors object
   */
  unregister () {
    this.jedi.unregisterEditor(this)
  }

  /**
   * If schema.default is not defined, sets an initial value based on it's type.
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

    if (this.schema.enum()) {
      value = this.schema.enum()[0]
    }

    if (this.schema.default()) {
      if (this.schema.enum() && !this.schema.enum().includes(this.schema.default())) {
        return
      }

      value = this.schema.default()
    }

    this.value = value
  }

  /**
   * Returns the current value of the editor
   */
  getValue () {
    return this.value
  }

  /**
   * Sanitize value
   */
  sanitize (value) {
    return value
  }

  /**
   * Sets the editor value and calls refreshUI right after. The onChange method
   * will be called unless triggersChange is explicitly set to false. This is
   * useful for initial or default values.
   */
  setValue (newValue, triggersChange = true) {
    newValue = this.sanitize(newValue)
    this.value = newValue

    if (triggersChange) {
      this.emit('change')
    }

    this.emit('set-value')
  }

  /**
   * Fires when the value of a child editor changes. This is relevant for Array
   * and Object editors.
   */
  onChildEditorChange () {
  }

  validate () {
    return this.jedi.validator.validate(this.getValue(), this.schema, this.getKey(), this.path)
  }

  setContainer () {
    this.container = this.jedi.theme.getContainer()
  }

  /**
   * Prepare data before building the editor
   */
  prepare () {}

  /**
   * Destroys the editor, and every reference that it is attached to it.
   */
  destroy () {
    this.unregister()

    if (this.ui) {
      this.ui.destroy()
    }

    for (const key in this) {
      if (!Object.hasOwn(this, key)) {
        continue
      }

      delete this[key]
    }
  }
}

export default Instance
