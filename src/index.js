import ThemeBarebones from './themes/barebones'
import ThemeWireframe from './themes/wireframe'
import ThemeBootstrap4 from './themes/bootstrap4'
import ThemeBootstrap5 from './themes/bootstrap5'
import Resolver from './resolver'
import Schema from './schema'
import Validator from './validator'

class Jedi {
  constructor (options) {
    this.options = Object.assign({
      removeProperty: false,
      addProperty: false,
      alwaysShowErrors: false,
      schema: {},
      theme: 'wireframe'
    }, options)

    this.container = document.querySelector(options.container) || document.createElement('div')
    this.schema = new Schema(options.schema)
    this.editors = {}
    this.root = null
    this.theme = null
    this.ready = false
    this.listeners = []
    this.resolver = new Resolver()
    this.validator = new Validator()
    this.init()
  }

  async init () {
    this.ready = false

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

    await this.schema.dereference()

    // if (!this.schema.type() && !this.schema.oneOf() && !this.schema.anyOf()) {
    //   const schemaType = getType(this.schema)
    //
    //   if (schemaType === 'object' || schemaType === 'array') {
    //     this.schema.type = schemaType
    //   } else {
    //     this.schema = {
    //       type: schemaType,
    //       default: this.schema
    //     }
    //   }
    // }

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
