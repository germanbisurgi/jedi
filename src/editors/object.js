import Editor from '../editor'

class ObjectEditor extends Editor {
  constructor (config) {
    super(config)
    this.value = {}
  }

  build () {
    const label = this.jedi.theme.getLabel('object')
    this.container.appendChild(label)
    Object.keys(this.schema.properties).forEach((prop) => {
      const schema = this.schema.properties[prop]
      const editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: schema,
        path: this.path + '.' + prop
      })
      this.container.appendChild(editor.container)
      this.childEditors[prop] = editor
    })
  }

  getValue () {
    Object.keys(this.childEditors).forEach(prop => {
      this.value[prop] = this.childEditors[prop].getValue()
    })
    return this.value
  }
}

export default ObjectEditor
