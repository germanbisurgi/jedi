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

  resolveRefs (schema) {
    return new Promise(async (resolve) => { // eslint-disable-line
      if (!schema.$ref) {
        resolve(schema)
      } else {
        console.log('resolving $ref', schema.$ref)
        const response = await window.fetch(schema.$ref)
        const newSchema = await response.json()
        resolve(this.resolveRefs(newSchema))
      }
    })
  }

  async loadEditors () {
    this.schema = await this.resolveRefs(this.schema)

    this.root = this.createEditor({
      jedi: this,
      schema: this.schema
    })
  }

  /**
   * Creates an editor instance based on the passed schema and config
   */
  createEditor (config) {
    const EditorClass = this.resolver.resolve(config.schema)
    const editor = new (EditorClass)(config)
    console.log('created editor', editor.path)

    if (editor.path === 'root') {
      console.log('ROOT')
      this.container.appendChild(editor.container)
      this.container.classList.add('jedi-loaded')
    }
    return editor
  }

  getValue () {
    return this.root.getValue()
  }

  getEditor (path) {
    return this.editors[path]
  }
}

export default Jedi
