import Editor from '../editor'

class ArrayEditor extends Editor {
  build () {
    const label = this.jedi.theme.getLabel('array')
    this.container.appendChild(label)
    const addBtn = this.jedi.theme.getButton('add')
    addBtn.addEventListener('click', () => {
      const editor = this.jedi.createEditor({
        jedi: this.jedi,
        schema: this.schema.items,
        path: this.path + '.' + Object.keys(this.childEditors).length
      })
      this.container.appendChild(editor.container)
      this.childEditors[editor.path] = editor
    })
    this.container.appendChild(addBtn)
  }

  getValue () {
    this.value = []
    Object.keys(this.childEditors).forEach(prop => {
      this.value.push(this.childEditors[prop].getValue())
    })
    return this.value
  }
}

export default ArrayEditor
