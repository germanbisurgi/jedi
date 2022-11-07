import ThemeWireframe from './themes/wireframe'
import ThemeBootstrap4 from './themes/bootstrap4'
import ThemeBootstrap5 from './themes/bootstrap5'
import Resolver from './resolver'
import Validator from './validator'
import EventEmitter from './event-emitter'
import refParser from '@apidevtools/json-schema-ref-parser'
import utils from './utils'

class Jedi {
  constructor (options) {
    this.options = Object.assign({
      removeProperty: false,
      addProperty: false,
      debug: false,
      logs: false,
      alwaysShowErrors: false,
      theme: 'wireframe'
    }, options)

    switch (options.theme) {
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
    this.events = new EventEmitter()
    this.resolver = new Resolver()
    this.validator = new Validator()
    this.container = document.querySelector(options.container)
    this.schema = options.schema
    this.root = null
    this.editors = {}
    this.ready = false
    this.init()
  }

  log () {
    if (this.options.logs) {
      console.log(...arguments)
    }
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

  async init () {
    if (utils.isNotSet(this.schema)) {
      this.schema = {}
    }

    this.schema = await refParser.dereference(this.schema)

    const hasOneOf = utils.hasOneOf(this.schema)
    const hasAnyOf = utils.hasAnyOf(this.schema)

    if (utils.isNotSet(this.schema.type) && !hasOneOf && !hasAnyOf) {
      const schemaType = utils.getType(this.schema)

      if (schemaType === 'object' || schemaType === 'array') {
        this.schema.type = schemaType
      } else {
        this.schema = {
          type: schemaType,
          default: this.schema
        }
      }
    }

    this.root = this.createEditor({
      jedi: this,
      schema: this.schema
    })

    if (this.options.startval) {
      this.root.setValue(this.options.startval)
    }

    this.hiddenInput = this.theme.getInput({
      name: 'json',
      type: 'hidden',
      id: 'jedi-hidden-input'
    })

    this.container.appendChild(this.hiddenInput)
    this.hiddenInput.value = JSON.stringify(this.getValue())

    this.container.appendChild(this.root.container)
    this.container.classList.add('jedi-ready')
    this.ready = true
    this.events.emit('ready')
    this.events.emit('change')
    this.root.onChange = () => {
      this.events.emit('change')
      this.hiddenInput.value = JSON.stringify(this.getValue())
    }
    this.getValue()
  }

  /**
   * Creates an editor instance based on the passed schema and config
   */
  createEditor (config) {
    const EditorClass = this.resolver.resolve(config.schema)
    const editor = new (EditorClass)(config)
    this.log('created editor', editor.path)
    return editor
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

  destroy () {
    this.root.destroy()

    if (this.hiddenInput) {
      this.hiddenInput.parentNode.removeChild(this.hiddenInput)
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Jedi
