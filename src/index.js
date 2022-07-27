import Theme from './theme'
import Resolver from './resolver'
import Validator from './validator'
import EventEmitter from './event-emitter'
import refParser from '@apidevtools/json-schema-ref-parser'

class Jedi {
  constructor (options) {
    this.options = Object.assign({
      removeProperty: false,
      addProperty: false,
      debug: false,
      logs: false
    }, options)
    this.events = new EventEmitter()
    this.theme = new Theme()
    this.resolver = new Resolver()
    this.validator = new Validator()
    this.container = options.container
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
    this.schema = await refParser.dereference(this.schema)

    this.root = this.createEditor({
      jedi: this,
      schema: this.schema
    })

    this.container.appendChild(this.root.container)
    this.container.classList.add('jedi-loaded')
    this.ready = true
    this.events.emit('ready')
    this.events.emit('change')
    this.root.onChange = () => {
      this.events.emit('change')
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

  destroy () {
    this.root.destroy()

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Jedi
