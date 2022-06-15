import Editor from '../editor'
import utils from '../utils'

class AnyOfEditor extends Editor {
  build () {
    this.editors = []
    this.switchOptionValues = []
    this.switchOptionsLabels = []
    this.activeEditor = null

    if (!utils.isSet(this.schema.anyOf) && utils.isArray(this.schema.anyOf)) {
      console.error('Wrong data type: anyOf')
      return false
    }

    const schemas = this.schema.anyOf

    // Editors
    schemas.forEach((schema, index) => {
      const schemaClone = utils.clone(schema)
      schemaClone.title = utils.getSchemaTitle(this.schema) || this.getKey()

      const editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: schemaClone,
        path: this.path,
        parent: this.parent
      })

      this.switchOptionValues.push(index)
      this.switchOptionsLabels.push(schema.title || this.schema.type || JSON.stringify(editor.schema))
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
  }

  register () {}

  setDebugContainer () {}

  switchEditor (index) {
    this.editors.forEach((editor) => {
      editor.unregister()
      if (editor.container.parentNode) {
        editor.container.parentNode.removeChild(editor.container)
      }
    })

    if (utils.isSet(this.editors[index])) {
      this.container.appendChild(this.editors[index].container)
      this.editors[index].register()
      this.activeEditor = this.editors[index]
      this.setValue(this.activeEditor.getValue())
    }
  }

  getValue () {
    return this.activeEditor.getValue()
  }

  destroy () {
    this.editors.forEach((editor) => {
      editor.destroy()
    })

    super.destroy()
  }
}

export default AnyOfEditor
