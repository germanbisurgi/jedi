import Theme from './theme'
import Resolver from './resolver'

class Jedi {
  constructor (config) {
    this.theme = new Theme()
    this.resolver = new Resolver()
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
    // todo delete?
  }

  loadEditors () {
    this.root = new (this.resolver.resolve(this.schema))({
      jedi: this,
      schema: this.schema,
      theme: this.theme
    })
    this.container.appendChild(this.root.html)
    this.container.classList.add('jedi-loaded')
  }

  getValue () {
    return this.root.getValue()
  }

  getEditor (path) {
    return this.editors[path]
  }
}

export default Jedi
