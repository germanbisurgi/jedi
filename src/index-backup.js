import ThemeBarebones from './themes/barebones'
import ThemeWireframe from './themes/wireframe'
import ThemeBootstrap4 from './themes/bootstrap4'
import ThemeBootstrap5 from './themes/bootstrap5'
import InstanceResolver from './resolver'
import Schema from './schema'
import Validator from './validator'
import RefParser from './ref-parser'

class Jedi {
  constructor (options) {
    this.options = Object.assign({
      editableProperties: false,
      alwaysShowErrors: false,
      showRequiredOnly: false,
      schema: {},
      theme: 'wireframe'
    }, options)

    this.container = document.querySelector(options.container) || document.createElement('div')
    this.editors = {}
    this.root = null
    this.theme = null
    this.listeners = []
    this.resolver = new InstanceResolver()
    this.validator = new Validator()
    this.refParser = new RefParser()
    this.schema = new Schema(options.schema)
    this.errors = []
    this.init()
  }

  init () {
    switch (this.options.theme) {
      case 'barebones':
        this.theme = new ThemeBarebones()
        break
      case 'bootstrap4':
        this.theme = new ThemeBootstrap4()
        break
      case 'bootstrap5':
        this.theme = new ThemeBootstrap5()
        break
      case 'wireframe':
        this.theme = new ThemeWireframe()
        break
    }

    this.refParser.dereference(this.schema.schema)

    this.root = this.createEditor({
      jedi: this,
      schema: this.schema
    })

    if (this.options.startval) {
      this.root.setValue(this.options.startval)
    }

    this.hiddenInput = this.theme.getInput({
      type: 'hidden',
      id: 'jedi-hidden-input'
    })

    this.hiddenInput.setAttribute('name', 'json')

    this.container.appendChild(this.hiddenInput)
    this.hiddenInput.value = JSON.stringify(this.getValue())

    this.container.appendChild(this.root.container)
    this.container.classList.add('jedi-ready')
    this.emit('change')
    this.root.onChange = () => {
      this.emit('change')
      this.hiddenInput.value = JSON.stringify(this.getValue())
    }
    this.getValue()

    console.table(this.editors)
  }

  /**
   * Adds an editor instance in the editors object
   */
  registerEditor (editor) {
    this.editors[editor.path] = editor
  }

  /**
   * Removes an editor instance from the editors object
   */
  unregisterEditor (editor) {
    this.editors[editor.path] = null
    delete this.editors[editor.path]
  }

  /**
   * Creates an editor instance based on the passed schema and config
   */
  createEditor (config) {
    return this.resolver.resolve(config)
  }

  getValue () {
    return this.root.getValue()
  }

  setValue () {
    return this.root.setValue(...arguments)
  }

  getEditor (path) {
    return this.editors[path]
  }

  disable () {
    this.root.disable()
  }

  enable () {
    this.root.enable()
  }

  validate () {
    Object.keys(this.editors).forEach((key) => {
      const editor = this.editors[key]
      this.errors = [...this.errors, ...editor.validate()]
    })

    return this.errors
  }

  reset () {
    this.options.startval = this.getValue()
    this.container.innerHTML = ''
    this.root.destroy()
    this.init()
  }

  setTheme (theme) {
    this.options.theme = theme
    this.reset()
  }

  on (name, callback) {
    this.listeners.push({ name, callback })
  }

  emit (name) {
    const listener = this.listeners.find(listener => listener.name === name)

    if (listener) {
      listener.callback()
    }
  }

  destroy () {
    this.root.destroy()

    this.container.innerHTML = ''

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Jedi
