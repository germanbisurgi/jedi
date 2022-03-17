import Theme from './theme'
import Resolver from './resolver'

class Jedi {
  constructor (container, schema) {
    this.theme = new Theme()
    this.resolver = new Resolver()
    this.container = container
    this.schema = schema
    this.root = null
    this.init()
  }

  init () {
    this.loadEditors()
  }

  loadEditors () {
    this.root = new (this.resolver.resolve(this.schema))({
      schema: this.schema,
      theme: this.theme
    })
    this.container.appendChild(this.root.html)
    this.container.classList.add('jedi-loaded')
  }
}

export default Jedi
