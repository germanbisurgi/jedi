import utils from './utils'

class Editor {
  constructor (config) {
    this.jedi = config.jedi
    this.schema = config.schema
    this.value = config.value || undefined
    this.path = config.path || 'root'
    this.parent = config.parent || null
    this.container = null
    this.debugContainer = null
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

    if (this.jedi.debug) {
      this.debugContainer = this.jedi.theme.getDebugContainer()
      this.container.appendChild(this.debugContainer)
    }
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
   * If schema.default is not difen, sets an initial value based on it's type.
   * If enum is defined and schema.default is not defined set the first item of
   * the enum als the default value.
   */
  setDefaultValue () {
    let value

    if (this.schema.type === 'boolean') value = false
    if (this.schema.type === 'number') value = 0.0
    if (this.schema.type === 'integer') value = 0
    if (this.schema.type === 'string') value = ''
    if (this.schema.type === 'object') value = {}
    if (this.schema.type === 'array') value = []

    const defaulIsDefined = utils.isSet(this.schema.default)
    if (defaulIsDefined) {
      value = this.schema.default
    }

    this.setValue(value, false)
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
    this.refreshDebug()
    this.showValidationErrors()
  }

  /**
   * Refresh the UI of the editor to reflect it's value. This is necessary when
   * using setValue to set the value programmatically.
   */
  refreshUI () {}

  /**
   * Refresh the UI of the editor to reflect it's value. This is necessary when
   * using setValue to set the value programmatically.
   */
  refreshDebug () {
    if (this.jedi.debug) {
      this.debugContainer.textContent = JSON.stringify(this.getValue(), null, 2)
    }
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
      this.parent.onChildEditorChange()
    }
  }

  /**
   * Fires when the value of a child editor changes. This is relevant for Array
   * and Object editors.
   */
  onChildEditorChange () {}

  /**
   * Destroys the editor, and every reference that it is attached to it.
   */
  destroy () {
    console.log(this.path, 'destroy')
    this.container.parentNode.removeChild(this.container)
    this.unregister()

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Editor
