import Theme from './theme'
import StringEditor from './editors/string'
import ObjectEditor from './editors/object'

class Jedi {
  constructor (container, schema) {
    this.theme = new Theme()
    this.container = container
    this.schema = schema
    this.init()
  }

  init () {
    this.loadEditors()
  }

  loadEditors () {
    const editor = this.createEditor(this.schema)
    console.log(editor)
    this.container.appendChild(editor.html)
    this.container.classList.add('jedi-loaded')
  }

  createEditor (schema) {
    return new (this.getEditorClass(schema))({
      schema: schema,
      theme: this.theme
    })
  }

  getEditorClass (schema) {
    const classes = {
      string: StringEditor,
      object: ObjectEditor
    }

    return classes[schema.type]
  }
}

export default Jedi
