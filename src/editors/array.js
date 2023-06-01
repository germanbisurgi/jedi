/* global confirm */

import Editor from './editor'
import { isArray, isSet, pathToAttribute } from '../utils'

class ArrayEditor extends Editor {
  build () {
    this.control = this.theme.getArrayControl({
      title: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      id: pathToAttribute(this.instance.path),
      description: this.instance.schema.description()
    })

    this.control.addBtn.addEventListener('click', () => {
      this.instance.addItem()
    })

    this.control.deleteAllBtn.addEventListener('click', () => {
      if (confirm('Confirm to delete all')) {
        this.instance.setValue([])
      }
    })

    this.container.appendChild(this.control.container)
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

  showValidationErrors () {
    const errors = this.instance.validate()

    this.control.messages.innerHTML = ''

    errors.forEach((error) => {
      const invalidFeedback = this.getInvalidFeedback(error.message)
      this.control.messages.appendChild(invalidFeedback)
    })
  }

  refreshUI () {
    this.control.childrenSlot.innerHTML = ''

    this.instance.children.forEach((child) => {
      const arrayItem = this.theme.getFieldset()
      const arrayItemBody = this.theme.getFieldsetBody()

      arrayItem.appendChild(arrayItemBody)

      this.control.childrenSlot.appendChild(arrayItem)

      arrayItemBody.appendChild(child.ui.container)

      const btnGroup = this.theme.getBtnGroup()
      const itemIndex = Number(child.getKey())

      // delete
      const deleteBtn = this.theme.getButton({
        textContent: 'Delete item'
      })

      deleteBtn.classList.add('jedi-array-delete')

      deleteBtn.addEventListener('click', () => {
        const itemIndex = Number(child.path.split(this.instance.jedi.pathSeparator).pop())
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

      arrayItemBody.appendChild(btnGroup)

      const buttons = this.control.container.querySelectorAll('button')

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
