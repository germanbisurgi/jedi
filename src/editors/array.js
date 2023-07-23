/* global confirm */

import Editor from './editor'
import { isArray, isSet, pathToAttribute } from '../utils'

/**
 * Represents an ArrayEditor instance.
 * @extends Editor
 */
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
    this.control.childrenSlot.innerHTML = ''

    this.instance.children.forEach((child) => {
      const itemIndex = Number(child.getKey())
      const deleteBtn = this.theme.getDeleteItemBtn()
      const moveUpBtn = this.theme.getMoveUpItemBtn()
      const moveDownBtn = this.theme.getMoveDownItemBtn()

      child.ui.control.arrayActions.innerHTML = ''
      child.ui.control.arrayActions.appendChild(deleteBtn)
      child.ui.control.arrayActions.appendChild(moveUpBtn)
      child.ui.control.arrayActions.appendChild(moveDownBtn)

      this.control.childrenSlot.appendChild(child.ui.control.container)

      deleteBtn.addEventListener('click', () => {
        const itemIndex = Number(child.path.split(this.instance.jedi.pathSeparator).pop())
        this.instance.deleteItem(itemIndex)
      })

      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.instance.move(itemIndex, toIndex)
      })

      moveDownBtn.addEventListener('click', () => {
        const toIndex = itemIndex + 1
        this.instance.move(itemIndex, toIndex)
      })

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
