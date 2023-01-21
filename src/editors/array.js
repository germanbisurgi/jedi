/* global confirm */

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

    // addBtn
    this.addBtn = this.jedi.theme.getButton({
      textContent: 'Add item'
    })

    this.addBtn.addEventListener('click', () => {
      this.addItem()
    })

    // deleteAll
    this.deleteAllBtn = this.jedi.theme.getButton({
      textContent: 'Delete items'
    })

    this.deleteAllBtn.addEventListener('click', () => {
      if (confirm('Confirm to delete all')) {
        this.setValue([])
      }
    })

    this.actionsSlot.appendChild(btnGroup)
    btnGroup.appendChild(this.addBtn)
    btnGroup.appendChild(this.deleteAllBtn)
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
    const itemSchema = new Schema(schema)

    const itemEditor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: itemSchema,
      path: this.path + '.' + this.childEditors.length,
      parent: this
    })

    const btnGroup = this.jedi.theme.getBtnGroup()
    const itemIndex = Number(itemEditor.getKey())

    const deleteBtn = this.jedi.theme.getButton({
      textContent: 'Delete item'
    })

    deleteBtn.addEventListener('click', () => {
      const itemIndex = Number(itemEditor.path.split('.').pop())
      this.deleteItem(itemIndex)
    })

    if (this.childEditors.length !== 0) {
      const moveUpBtn = this.jedi.theme.getButton({
        textContent: 'Move up'
      })

      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.move(itemIndex, toIndex)
      })

      btnGroup.appendChild(moveUpBtn)
    }

    if (this.getValue().length - 1 !== itemIndex) {
      const moveDownBtn = this.jedi.theme.getButton({
        textContent: 'Move down'
      })

      moveDownBtn.addEventListener('click', () => {
        const toIndex = itemIndex + 1
        this.move(itemIndex, toIndex)
      })

      btnGroup.appendChild(moveDownBtn)
    }

    itemEditor.container.appendChild(itemEditor.actionsSlot)
    itemEditor.actionsSlot.appendChild(btnGroup)
    btnGroup.appendChild(deleteBtn)

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
    if (confirm('Confirm to delete')) {
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
      this.addBtn.removeAttribute('disabled')
      this.deleteAllBtn.removeAttribute('disabled')
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
