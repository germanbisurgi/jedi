import Theme from './theme'
import Resolver from './resolver'
import Validator from './validator'

class Jedi {
  constructor (config) {
    this.theme = new Theme()
    this.resolver = new Resolver()
    this.validator = new Validator()
    this.container = config.container
    this.schema = config.schema
    this.root = null
    this.editors = {}
    this.init()
  }

  init () {
    this.loadEditors()
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
    // todo delete?
  }

  loadEditors () {
    this.root = this.createEditor({
      jedi: this,
      schema: this.schema
    })
    this.container.appendChild(this.root.container)
    this.container.classList.add('jedi-loaded')
  }

  /**
   * Creates an editor instance based on the passed schema and config
   */
  createEditor (config) {
    // todo expand defs
    return new (this.resolver.resolve(config.schema))(config)
  }

  getValue () {
    return this.root.getValue()
  }

  getEditor (path) {
    return this.editors[path]
  }
}

export default Jedi
