import Editor from '../editor'
import utils from '../utils'

class ObjectEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getLabel(labelText)
    this.container.appendChild(label)

    // child editors
    if (utils.isSet(this.schema.properties)) {
      Object.keys(this.schema.properties).forEach((prop) => {
        const schema = this.schema.properties[prop]
        const editor = this.jedi.createEditor({
          jedi: this.jedi,
          schema: schema,
          path: this.path + '.' + prop,
          parent: this
        })
        this.container.appendChild(editor.container)
        this.childEditors.push(editor)
      })
    }
  }

  getValue () {
    this.value = {}

    this.childEditors.forEach((childEditor) => {
      this.value[childEditor.getKey()] = childEditor.getValue()
    })

    return this.value
  }

  onChildEditorChange () {
    const value = {}

    this.childEditors.forEach((childEditor) => {
      value[childEditor.getKey()] = childEditor.getValue()
    })

    this.setValue(value)
  }

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ObjectEditor
