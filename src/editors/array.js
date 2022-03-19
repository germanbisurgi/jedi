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

  createItemEditor () {
    return this.jedi.createEditor({
      jedi: this.jedi,
      schema: this.schema.items,
      path: this.path + '.' + this.childEditors.length
    })
  }

  addItem () {
    const tempEditor = this.createItemEditor()
    const value = this.getValue()
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value)
  }

  refreshUI () {
    console.log('this.getValue()', this.getValue())

    this.childEditors.forEach((editor) => {
      this.container.removeChild(editor.container)
      editor.destroy()
    })

    this.childEditors = []

    this.getValue().forEach((value) => {
      const itemEditor = this.createItemEditor()
      itemEditor.setValue(value, true)
      this.childEditors.push(itemEditor)
    })

    this.childEditors.forEach((editor) => {
      this.container.appendChild(editor.container)
    })

    console.log('this.childEditors', this.childEditors)
  }

  showValidationErrors () {}
}

export default ArrayEditor
