/* global confirm */

import Editor from './editor'
import { isArray, isSet } from '../utils'

class ArrayEditor extends Editor {
  build () {
    this.fieldset = this.theme.getFieldset()

    // title
    this.legend = this.theme.getContainerHead({
      textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    // description
    if (isSet(this.instance.schema.description())) {
      this.fieldset.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }

    this.fieldset.appendChild(this.legend)
    this.fieldset.appendChild(this.messagesSlot)
    this.fieldset.appendChild(this.childrenSlot)
    this.legend.appendChild(this.actionsSlot)
    this.container.appendChild(this.fieldset)

    // btn group
    const btnGroup = this.theme.getBtnGroup()

    // addBtn
    this.addBtn = this.theme.getArrayBtnAdd({
      textContent: 'Add item'
    })

    this.addBtn.addEventListener('click', () => {
      this.instance.addItem()
    })

    // deleteAll
    this.deleteAllBtn = this.theme.getArrayBtnDeleteAll({
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

  getInvalidFeedback (message) {
    return this.theme.getAlert({
      message: message
    })
  }

  sanitize (value) {
    if (isArray(value)) {
      return value
    }

    return []
  }

  refreshUI () {
    this.instance.children.forEach((child) => {
      this.childrenSlot.appendChild(child.ui.container)

      child.ui.controlSlot.appendChild(child.ui.actionsSlot)

      while (child.ui.actionsSlot.firstChild) {
        child.ui.actionsSlot.removeChild(child.ui.actionsSlot.lastChild)
      }

      const btnGroup = this.theme.getBtnGroup()
      const itemIndex = Number(child.getKey())

      // delete
      const deleteBtn = this.theme.getButton({
        textContent: 'Delete item'
      })

      deleteBtn.classList.add('jedi-array-delete')

      deleteBtn.addEventListener('click', () => {
        const itemIndex = Number(child.path.split('.').pop())
        this.instance.deleteItem(itemIndex)
      })

      btnGroup.appendChild(deleteBtn)

      // move up
      if (this.instance.children.length !== 0) {
        const moveUpBtn = this.theme.getButton({
          textContent: 'Move up'
        })

        moveUpBtn.classList.add('jedi-array-move-up')

        moveUpBtn.addEventListener('click', () => {
          const toIndex = itemIndex - 1
          this.instance.move(itemIndex, toIndex)
        })

        btnGroup.appendChild(moveUpBtn)
      }

      // move down
      if (this.instance.getValue().length - 1 !== itemIndex) {
        const moveDownBtn = this.theme.getButton({
          textContent: 'Move down'
        })

        moveDownBtn.classList.add('jedi-array-move-down')

        moveDownBtn.addEventListener('click', () => {
          const toIndex = itemIndex + 1
          this.instance.move(itemIndex, toIndex)
        })

        btnGroup.appendChild(moveDownBtn)
      }

      child.ui.actionsSlot.appendChild(btnGroup)

      const buttons = this.container.querySelectorAll('button')

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
  }
}

export default ArrayEditor
