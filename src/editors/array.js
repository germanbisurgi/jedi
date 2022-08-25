import Editor from '../editor'
import utils from '../utils'

class ArrayEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getH3(labelText)
    this.container.appendChild(label)

    // addBtn
    const addBtn = this.jedi.theme.getButton('Add Item')
    this.container.appendChild(addBtn)
    addBtn.addEventListener('click', () => {
      this.addItem()
    })

    // deleteAll
    const deleteAllBtn = this.jedi.theme.getButton('Delete Items')
    this.container.appendChild(deleteAllBtn)
    deleteAllBtn.addEventListener('click', () => {
      if (window.confirm('Confirm to delete all')) {
        this.setValue([])
      }
    })
  }

  createItemEditor (value) {
    let schema

    // When no schema is defined get the type from the value
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

    const deleteBtn = this.jedi.theme.getButton('Delete Item')
    itemEditor.container.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
      const itemIndex = Number(itemEditor.path.split('.').pop())
      this.deleteItem(itemIndex)
    })

    if (this.childEditors.length !== 0) {
      const moveUpBtn = this.jedi.theme.getButton('Move up')
      itemEditor.container.appendChild(moveUpBtn)
      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.move(itemIndex, toIndex)
      })
    }

    if (this.getValue().length - 1 !== itemIndex) {
      const moveDownBtn = this.jedi.theme.getButton('Move down')
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

  onChildEditorChange () {
    const value = []

    this.childEditors.forEach((childEditor) => {
      value.push(childEditor.getValue())
    })

    this.setValue(value)
  }

  refreshUI () {
    const value = this.getValue()

    this.childEditors.forEach((editor) => {
      editor.destroy()
    })

    this.childEditors = []

    value.forEach((itemValue) => {
      const itemEditor = this.createItemEditor(itemValue)
      itemEditor.setValue(itemValue, false)
      this.childEditors.push(itemEditor)

      let buttons = Array.from(this.container.querySelectorAll('button'))

      this.childEditors.forEach((childEditor) => {
        const childButtons = Array.from(childEditor.container.querySelectorAll('button'))
        buttons = buttons.concat(childButtons)
      })

      if (this.disabled) {
        itemEditor.disable()
        buttons.forEach((button) => {
          button.setAttribute('disabled', 'disabled')
        })
      } else {
        itemEditor.enable()
        buttons.forEach((button) => {
          button.removeAttribute('disabled')
        })
      }
    })

    this.childEditors.forEach((editor) => {
      this.container.appendChild(editor.container)
    })
  }

  sanitize (value) {
    if (utils.isArray(value)) {
      return value
    }

    return []
  }

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ArrayEditor
