import Editor from '../editor'
import utils from '../utils'

class AnyOfEditor extends Editor {
  build () {
    this.editors = []
    this.switchOptionValues = []
    this.switchOptionsLabels = []

    if (!utils.isSet(this.schema.anyOf) && utils.isArray(this.schema.anyOf)) {
      console.error('Wrong data type: anyOf')
      return false
    }

    const schemas = this.schema.anyOf

    // Editors
    schemas.forEach((schema, index) => {
      const editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this
      })

      this.switchOptionValues.push(index)
      this.switchOptionsLabels.push(schema.title || index)
      this.editors.push(editor)
      editor.unregister()
    })

    // Switch
    this.switch = this.jedi.theme.getSelect(this.switchOptionValues, this.switchOptionsLabels, {
      id: this.path
    })

    // events
    this.switch.addEventListener('change', () => {
      this.switchEditor(this.switch.value)
    })

    this.container.appendChild(this.switch)

    if (utils.isSet(this.editors[0])) {
      this.switchEditor(0)
    }

    console.log(this.jedi.editors)
  }

  register () {}

  switchEditor (index) {
    this.editors.forEach((editor) => {
      editor.unregister()
      if (editor.container.parentNode) {
        editor.container.parentNode.removeChild(editor.container)
      }
    })

    if (utils.isSet(this.editors[index])) {
      this.editors[index].register()
      this.container.appendChild(this.editors[index].container)
    }

    console.log(this.jedi.editors)
  }
}

export default AnyOfEditor
