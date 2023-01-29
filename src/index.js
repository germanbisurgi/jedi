import InstanceResolver from './instance-resolver'
import Schema from './schema'
import Validator from './validator'
import RefParser from './ref-parser'
import EventEmitter from './event-emitter'

class Jedi extends EventEmitter {
  constructor (options) {
    super()
    this.options = Object.assign({
      container: null,
      isEditor: false,
      editableProperties: false,
      alwaysShowErrors: false,
      showRequiredOnly: false,
      schema: {},
      theme: 'wireframe'
    }, options)

    this.container = document.querySelector(options.container)
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
    this.refParser.dereference(this.schema.schema)

    this.root = this.createEditor({
      jedi: this,
      schema: this.schema
    })

    if (this.options.startval) {
      this.root.setValue(this.options.startval)
    }

    if (this.options.isEditor && this.container) {
      this.appendHiddenInput()
      this.container.appendChild(this.root.ui.container)
      this.container.classList.add('jedi-ready')
    }

    this.root.on('change', () => {
      this.emit('change')
    })

    console.table(this.editors)
  }

  appendHiddenInput () {
    this.hiddenInput = this.root.ui.theme.getInput({
      type: 'hidden',
      id: 'jedi-hidden-input'
    })

    this.hiddenInput.setAttribute('name', 'json')

    this.container.appendChild(this.hiddenInput)
    this.hiddenInput.value = JSON.stringify(this.getValue())

    this.on('change', () => {
      this.hiddenInput.value = JSON.stringify(this.getValue())
    })
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
    this.root.ui.disable()
  }

  enable () {
    this.root.ui.enable()
  }

  validate () {
    this.errors = []

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

  destroy () {
    this.root.destroy()

    this.container.innerHTML = ''

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Jedi
