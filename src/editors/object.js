import Editor from '../editor'

class ObjectEditor extends Editor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText)
    this.container.appendChild(label)

    // child editors
    Object.keys(this.schema.properties).forEach((prop) => {
      const schema = this.schema.properties[prop]
      const editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: schema,
        path: this.path + '.' + prop,
        parent: this
      })
      this.container.appendChild(editor.container)
      this.childEditors[prop] = editor
    })
  }

  getValue () {
    this.value = {}
    Object.keys(this.childEditors).forEach(prop => {
      this.value[prop] = this.childEditors[prop].getValue()
    })

    return this.value
  }

  refreshUI () {}
}

export default ObjectEditor
