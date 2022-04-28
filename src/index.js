import Theme from './theme'
import Resolver from './resolver'
import Validator from './validator'
import refParser from '@apidevtools/json-schema-ref-parser'

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
    this.logs = config.logs || false
    this.init()
  }

  log () {
    if (this.logs) {
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

  /**
   * Loads schemas recursively when "$ref" is set
   * @param schema
   * @return {Promise<unknown>}
   */
  // resolveRefs (schema) {
  //   return new Promise(async (resolve) => { // eslint-disable-line
  //     if (!schema.$ref) {
  //       resolve(schema)
  //     } else {
  //       this.log('resolving $ref', schema.$ref)
  //       const response = await window.fetch(schema.$ref)
  //       const newSchema = await response.json()
  //       resolve(this.resolveRefs(newSchema))
  //     }
  //   })
  // }

  async init () {
    this.schema = await refParser.dereference(this.schema)
    console.log(this.schema)

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
    const EditorClass = this.resolver.resolve(config.schema)
    const editor = new (EditorClass)(config)
    this.log('created editor', editor.path)
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
