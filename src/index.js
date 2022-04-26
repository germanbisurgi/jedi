import Theme from './theme'
import Resolver from './resolver'
import Validator from './validator'

class Jedi {
  constructor (config) {
    this.theme = new Theme()
    this.resolver = new Resolver()
    this.validator = new Validator()
    this.container = config.container
    this.debug = config.debug || false
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
  }

  async loadEditors () {
    if (this.schema.$ref) {
      const response = await window.fetch(this.schema.$ref)
      this.schema = await response.json()
    }

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
    const EditorClass = this.resolver.resolve(config.schema)
    return new (EditorClass)(config)
  }

  getValue () {
    return this.root.getValue()
  }

  getEditor (path) {
    return this.editors[path]
  }
}

export default Jedi
