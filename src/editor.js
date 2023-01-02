class Editor {
  constructor (config) {
    this.jedi = config.jedi
    this.schema = config.schema
    this.disabled = false
    this.value = config.value || undefined
    this.path = config.path || 'root'
    this.parent = config.parent || null
    this.container = null
    this.errorsContainer = null
    this.childEditors = []
    this.init()
  }

  /**
   * Starts the build pipeline of the editor
   */
  init () {
    this.register()
    this.setDefaultValue()
    this.setContainer()
    this.setContainerAttributes()
    this.setErrorsContainer()
    this.build()
    this.refreshUI()
    if (this.jedi.ready || this.jedi.options.alwaysShowErrors) {
      this.showValidationErrors()
    }
  }

  getKey () {
    return this.path.split('.').pop()
  }

  setContainer () {
    this.container = this.jedi.theme.getContainer()
  }

  setContainerAttributes () {
    this.container.setAttribute('data-path', this.path)

    if (this.schema.type()) {
      this.container.setAttribute('data-type', this.schema.type())
    }
  }

  setErrorsContainer () {
    this.errorsContainer = this.jedi.theme.getErrorsContainer()
    this.container.appendChild(this.errorsContainer)
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

    if (this.schema.default()) {
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
      this.onChange()
    }

    this.refreshUI()
  }

  /**
   * Refresh the UI of the editor to reflect it's value. This is necessary when
   * using setValue to set the value programmatically.
   */
  refreshUI () {}

  /**
   * Disables the editor
   */
  disable () {
    this.disabled = true
    this.refreshUI()
  }

  /**
   * Enables the editor
   */
  enable () {
    this.disabled = false
    this.refreshUI()
  }

  /**
   * Returns true if the property is required
   */
  isRequired () {
    if (this.parent?.schema.required()) {
      return this.parent.schema.required().includes(this.getKey())
    }

    return false
  }

  validate () {
    return this.jedi.validator.validate(this.getValue(), this.schema, this.getKey(), this.path)
  }

  /**
   * Shows validation messages in the editor container.
   */
  showValidationErrors () {
    const errors = this.validate()

    this.errorsContainer.innerHTML = ''

    errors.forEach((error) => {
      this.errorsContainer.appendChild(this.jedi.theme.getInputError({
        message: error.message
      }))
    })
  }

  /**
   * Fires when the value of the editor changes.
   */
  onChange () {
    if (this.parent) {
      this.parent.onChildEditorChange()
    }

    this.showValidationErrors()
  }

  /**
   * Fires when the value of a child editor changes. This is relevant for Array
   * and Object editors.
   */
  onChildEditorChange () {
  }

  /**
   * Destroys the editor, and every reference that it is attached to it.
   */
  destroy () {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container)
    }

    this.unregister()

    for (const key in this) {
      if (!Object.prototype.hasOwnProperty.call(this, key)) {
        continue
      }

      delete this[key]
    }
  }
}

export default Editor
