import StringEditor from './editors/string'

class Jedi {
  constructor (container, schema) {
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
    let editor = null
    if (schema.type === 'string') {
      editor = new StringEditor()
    }
    return editor
  }
}

export default Jedi
