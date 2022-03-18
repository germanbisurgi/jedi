class Editor {
  constructor (config) {
    this.jedi = config.jedi
    this.schema = config.schema
    this.html = null
    this.input = null
    this.value = undefined
    this.path = config.path || 'root'
    this.init()
  }

  /**
   * Starts the build pipeline of the editor
   */
  init () {
    this.build()
    this.setDefaultValue()
    this.register()
  }

  build () {}

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
    if (typeof this.schema.default !== 'undefined') {
      this.setValue(this.schema.default, true)
    }
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
  setValue (newValue, initial) {
    newValue = this.sanitize(newValue)
    const currentValue = this.value

    if (!initial && currentValue !== newValue) {
      this.onChange()
    }

    this.value = newValue
    this.refreshUI()
  }

  /**
   * Refresh the UI of the editor to reflect it's value. This is necessary when
   * using setValue to set the value programmatically.
   */
  refreshUI () {
    this.input.value = this.getValue()
  }

  /**
   * Fires when the value of the editor changes.
   */
  onChange () {
    console.log('onChange')
  }

  /**
   * Destroys the editor, and every reference that it is attached to it.
   */
  destroy () {
    this.unregister()
  }
}

export default Editor
