class Editor {
  constructor (config) {
    this.jedi = config.jedi
    this.schema = config.schema
    this.value = config.value || undefined
    this.path = config.path || 'root'
    this.parent = config.parent || null
    this.container = null
    this.childEditors = []
    this.init()
  }

  /**
   * Starts the build pipeline of the editor
   */
  init () {
    this.setContainer()
    this.build()
    this.setDefaultValue()
    this.showValidationErrors()
    this.register()
  }

  getKey () {
    return this.path.split('.').pop()
  }

  setContainer () {
    this.container = this.jedi.theme.getContainer()
    this.container.setAttribute('data-path', this.path)
    this.container.setAttribute('data-type', this.schema.type)
  }

  /**
   * build the editor's user interface
   */
  build () {
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
   * Sets a default value in the property "default" is set in the schema
   */
  setDefaultValue () {
    let value

    if (this.schema.type === 'boolean') value = false
    if (this.schema.type === 'number') value = 0.0
    if (this.schema.type === 'integer') value = 0
    if (this.schema.type === 'string') value = ''
    if (this.schema.type === 'object') value = {}
    if (this.schema.type === 'array') value = []

    if (typeof this.schema.default !== 'undefined') {
      value = this.schema.default
    }

    this.setValue(value, true)
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
   * will be called if the new value is not an initial or default value and the
   * new value is different than the current value.
   */
  setValue (newValue, initial = false) {
    newValue = this.sanitize(newValue)
    const currentValue = this.getValue()
    this.value = newValue

    if (!initial && currentValue !== newValue) {
      this.onChange()
    }

    this.refreshUI()
  }

  /**
   * Refresh the UI of the editor to reflect it's value. This is necessary when
   * using setValue to set the value programmatically.
   */
  refreshUI () {
  }

  /**
   * Shows validation messages in the editor container.
   */
  showValidationErrors () {
    const errors = this.jedi.validator.validate(this.schema, this.getValue(), this.path)
    this.jedi.theme.removeInputError(this.container)
    errors.forEach((error) => {
      this.jedi.theme.addInputError(this.container, error.message)
    })
  }

  /**
   * Fires when the value of the editor changes.
   */
  onChange () {
    if (this.parent) {
      this.parent.onChange()
    }
    this.showValidationErrors()
  }

  /**
   * Destroys the editor, and every reference that it is attached to it.
   */
  destroy () {
    this.unregister()
  }
}

export default Editor
