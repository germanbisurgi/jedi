import Editor from '../editor'

class ArrayEditor extends Editor {
  build () {
    const label = this.jedi.theme.getLabel('array')
    this.container.appendChild(label)
    const addBtn = this.jedi.theme.getButton('add')
    this.container.appendChild(addBtn)
    addBtn.addEventListener('click', () => {
      this.addItem()
    })
  }

  addItem () {
    const editor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: this.schema.items,
      path: this.path + '.' + Object.keys(this.childEditors).length
    })
    this.container.appendChild(editor.container)
    this.childEditors[editor.path] = editor
    return editor
  }

  deleteItem (item) {
    this.container.removeChild(item)
  }

  refreshUI () {
    this.value.forEach((value) => {
      const editor = this.addItem()
      editor.setValue(value, true)
    })
  }

  showValidationErrors () {}
}

export default ArrayEditor
