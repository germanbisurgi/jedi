/* global confirm */

import Editor from './editor'
import Schema from '../schema'
import { getType, clone } from '../utils'

class ArrayEditor extends Editor {
  build () {
    this.setContainer()
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.childrenSlot)
    this.container.appendChild(this.actionsSlot)

    // btn group
    const btnGroup = this.theme.getBtnGroup()

    // addBtn
    this.addBtn = this.theme.getButton({
      textContent: 'Add item'
    })

    this.addBtn.addEventListener('click', () => {
      this.instance.addItem()
    })

    // deleteAll
    this.deleteAllBtn = this.theme.getButton({
      textContent: 'Delete items'
    })

    this.deleteAllBtn.addEventListener('click', () => {
      if (confirm('Confirm to delete all')) {
        this.instance.setValue([])
      }
    })

    this.actionsSlot.appendChild(btnGroup)
    btnGroup.appendChild(this.addBtn)
    btnGroup.appendChild(this.deleteAllBtn)
  }

  setContainer () {
    this.container = this.theme.getFieldset()

    // title
    this.container.appendChild(this.theme.getLegend({
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    }))

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  createItemInstance (value) {
    const schema = this.instance.schema.items() ? this.instance.schema.items() : { type: getType(value) }
    const itemSchema = new Schema(schema)

    const itemEditor = this.instance.jedi.createInstance({
      jedi: this.instance.jedi,
      schema: itemSchema,
      path: this.instance.path + '.' + this.instance.children.length,
      parent: this.instance
    })

    const btnGroup = this.theme.getBtnGroup()
    const itemIndex = Number(itemEditor.getKey())

    const deleteBtn = this.theme.getButton({
      textContent: 'Delete item'
    })

    deleteBtn.addEventListener('click', () => {
      const itemIndex = Number(itemEditor.path.split('.').pop())
      this.instance.deleteItem(itemIndex)
    })

    if (this.instance.children.length !== 0) {
      const moveUpBtn = this.theme.getButton({
        textContent: 'Move up'
      })

      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.move(itemIndex, toIndex)
      })

      btnGroup.appendChild(moveUpBtn)
    }

    if (this.instance.getValue().length - 1 !== itemIndex) {
      const moveDownBtn = this.theme.getButton({
        textContent: 'Move down'
      })

      moveDownBtn.addEventListener('click', () => {
        const toIndex = itemIndex + 1
        this.move(itemIndex, toIndex)
      })

      btnGroup.appendChild(moveDownBtn)
    }

    itemEditor.ui.container.appendChild(itemEditor.ui.actionsSlot)
    itemEditor.ui.actionsSlot.appendChild(btnGroup)
    btnGroup.appendChild(deleteBtn)

    return itemEditor
  }

  move (fromIndex, toIndex) {
    const value = clone(this.instance.getValue())
    const item = value[fromIndex]
    value.splice(fromIndex, 1)
    value.splice(toIndex, 0, item)
    this.instance.setValue(value)
  }

  refreshUI () {
    const value = this.instance.getValue()

    this.instance.children.forEach((child) => {
      child.destroy()
    })

    this.instance.children = []

    value.forEach((itemValue) => {
      const child = this.createItemInstance(itemValue)
      child.setValue(itemValue, false)
      this.instance.children.push(child)

      let buttons = Array.from(this.container.querySelectorAll('button'))

      this.instance.children.forEach((child) => {
        const childButtons = Array.from(child.ui.container.querySelectorAll('button'))
        buttons = buttons.concat(childButtons)
      })

      if (this.disabled) {
        child.ui.disable()
        buttons.forEach((button) => {
          button.setAttribute('disabled', 'disabled')
        })
      } else {
        child.ui.enable()
        buttons.forEach((button) => {
          button.removeAttribute('disabled')
        })
      }
    })

    this.instance.children.forEach((child) => {
      this.childrenSlot.appendChild(child.ui.container)
    })

    if (this.disabled) {
      this.addBtn.setAttribute('disabled', 'disabled')
      this.deleteAllBtn.setAttribute('disabled', 'disabled')
    } else {
      this.addBtn.removeAttribute('disabled')
      this.deleteAllBtn.removeAttribute('disabled')
    }
  }
}

export default ArrayEditor
