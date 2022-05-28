import Editor from '../editor'
import utils from '../utils'

class ArrayEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getLabel(labelText)
    this.container.appendChild(label)

    // addBtn
    const addBtn = this.jedi.theme.getButton('add')
    this.container.appendChild(addBtn)
    addBtn.addEventListener('click', () => {
      this.addItem()
    })
  }

  createItemEditor (value) {
    let schema

    // When setting no schema is defined get the type from the value
    if (utils.isSet(this.schema.items)) {
      schema = this.schema.items
    } else {
      schema = {
        type: utils.getType(value)
      }
    }

    const itemEditor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: schema,
      path: this.path + '.' + this.childEditors.length,
      parent: this
    })

    const itemIndex = Number(itemEditor.getKey())

    if (itemEditor.input) {
      itemEditor.input.addEventListener('change', () => {
        const value = utils.clone(this.getValue())
        value[itemIndex] = utils.clone(itemEditor.getValue())
        this.setValue(value)
      })
    }

    const deleteBtn = this.jedi.theme.getButton('delete')
    itemEditor.container.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
      const itemIndex = Number(itemEditor.path.split('.').pop())
      this.deleteItem(itemIndex)
    })

    if (this.childEditors.length !== 0) {
      const moveUpBtn = this.jedi.theme.getButton('move up')
      itemEditor.container.appendChild(moveUpBtn)
      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.move(itemIndex, toIndex)
      })
    }

    if (this.value.length - 1 !== itemIndex) {
      const moveDownBtn = this.jedi.theme.getButton('move down')
      itemEditor.container.appendChild(moveDownBtn)
      moveDownBtn.addEventListener('click', () => {
        const toIndex = itemIndex + 1
        this.move(itemIndex, toIndex)
      })
    }

    return itemEditor
  }

  move (fromIndex, toIndex) {
    const value = utils.clone(this.getValue())
    const item = value[fromIndex]
    value.splice(fromIndex, 1)
    value.splice(toIndex, 0, item)
    this.setValue(value)
  }

  addItem () {
    const tempEditor = this.createItemEditor()
    const value = utils.clone(this.getValue())
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value)
  }

  deleteItem (itemIndex) {
    if (window.confirm('Confirm to delete')) {
      const currentValue = utils.clone(this.getValue())
      const newValue = currentValue.filter((item, index) => index !== itemIndex)
      this.setValue(newValue)
    }
  }

  refreshUI () {
    this.childEditors.forEach((editor) => {
      editor.destroy()
    })

    this.childEditors = []

    this.getValue().forEach((value) => {
      const itemEditor = this.createItemEditor(value)
      itemEditor.setValue(value, false)
      this.childEditors.push(itemEditor)
    })

    this.childEditors.forEach((editor) => {
      this.container.appendChild(editor.container)
    })
  }

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ArrayEditor
