import Editor from '../editor'
import Schema from '../schema'
import { getType, clone, isArray } from '../utils'

class ArrayEditor extends Editor {
  build () {
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.childEditorsSlot)
    this.container.appendChild(this.actionsSlot)

    // btn group
    const btnGroup = this.jedi.theme.getBtnGroup()
    this.actionsSlot.appendChild(btnGroup)

    // addBtn
    this.addBtn = this.jedi.theme.getButton({
      textContent: 'Add item'
    })
    btnGroup.appendChild(this.addBtn)
    this.addBtn.addEventListener('click', () => {
      this.addItem()
    })

    // deleteAll
    this.deleteAllBtn = this.jedi.theme.getButton({
      textContent: 'Delete items'
    })
    btnGroup.appendChild(this.deleteAllBtn)
    this.deleteAllBtn.addEventListener('click', () => {
      if (window.confirm('Confirm to delete all')) {
        this.setValue([])
      }
    })
  }

  setContainer () {
    this.container = this.jedi.theme.getFieldset()

    // title
    this.container.appendChild(this.jedi.theme.getLegend({
      textContent: this.schema.title() ? this.schema.title() : this.getKey(),
      srOnly: this.schema.option('hideTitle')
    }))

    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }
  }

  createItemEditor (value) {
    const schema = this.schema.items() ? this.schema.items() : { type: getType(value) }

    const itemEditor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: new Schema(schema),
      path: this.path + '.' + this.childEditors.length,
      parent: this
    })

    const btnGroup = this.jedi.theme.getBtnGroup()
    itemEditor.container.appendChild(itemEditor.actionsSlot)
    itemEditor.actionsSlot.appendChild(btnGroup)

    const itemIndex = Number(itemEditor.getKey())

    const deleteBtn = this.jedi.theme.getButton({
      textContent: 'Delete item'
    })
    btnGroup.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', () => {
      const itemIndex = Number(itemEditor.path.split('.').pop())
      this.deleteItem(itemIndex)
    })

    if (this.childEditors.length !== 0) {
      const moveUpBtn = this.jedi.theme.getButton({
        textContent: 'Move up'
      })
      btnGroup.appendChild(moveUpBtn)
      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.move(itemIndex, toIndex)
      })
    }

    if (this.getValue().length - 1 !== itemIndex) {
      const moveDownBtn = this.jedi.theme.getButton({
        textContent: 'Move down'
      })
      btnGroup.appendChild(moveDownBtn)
      moveDownBtn.addEventListener('click', () => {
        const toIndex = itemIndex + 1
        this.move(itemIndex, toIndex)
      })
    }

    return itemEditor
  }

  move (fromIndex, toIndex) {
    const value = clone(this.getValue())
    const item = value[fromIndex]
    value.splice(fromIndex, 1)
    value.splice(toIndex, 0, item)
    this.setValue(value)
  }

  addItem () {
    const tempEditor = this.createItemEditor()
    const value = clone(this.getValue())
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value)
  }

  deleteItem (itemIndex) {
    if (window.confirm('Confirm to delete')) {
      const currentValue = clone(this.getValue())
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
      this.childEditorsSlot.appendChild(editor.container)
    })

    if (this.disabled) {
      this.addBtn.setAttribute('disabled', 'disabled')
      this.deleteAllBtn.setAttribute('disabled', 'disabled')
    } else {
      this.addBtn.removeAttribute('disabled', 'disabled')
      this.deleteAllBtn.removeAttribute('disabled', 'disabled')
    }
  }

  sanitize (value) {
    if (isArray(value)) {
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
