import ThemeWireframe from './themes/wireframe'
import ThemeBootstrap4 from './themes/bootstrap4'
import ThemeBootstrap5 from './themes/bootstrap5'
import Resolver from './resolver'
import Validator from './validator'
import refParser from '@apidevtools/json-schema-ref-parser'
import utils from './utils'

class Jedi {
  constructor (options) {
    this.options = Object.assign({
      removeProperty: false,
      addProperty: false,
      alwaysShowErrors: false,
      theme: 'wireframe'
    }, options)

    this.resolver = new Resolver()
    this.validator = new Validator()
    this.container = document.querySelector(options.container)
    this.schema = options.schema
    this.root = null
    this.editors = {}
    this.theme = null
    this.ready = false
    this.listeners = []
    this.init()
  }

  async init () {
    if (utils.isNotSet(this.schema)) {
      this.schema = {}
    }

    this.ready = false

    switch (this.options.theme) {
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
    this.emit('ready')
    this.emit('change')
    this.root.onChange = () => {
      this.emit('change')
      this.hiddenInput.value = JSON.stringify(this.getValue())
    }
    this.getValue()
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
    const EditorClass = this.resolver.resolve(config.schema)
    return new (EditorClass)(config)
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
