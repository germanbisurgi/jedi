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

  refreshUI () {
    this.control.childrenSlot.innerHTML = ''

    this.instance.children.forEach((child) => {
      const itemIndex = Number(child.getKey())
      const childTitle = isSet(child.schema.title()) ? child.schema.title() : ''

      const arrayItem = this.theme.getArrayItem({
        legend: childTitle + ' ' + itemIndex,
        srOnly: true
      })

      arrayItem.childrenSlot.appendChild(child.ui.container)

      this.control.childrenSlot.appendChild(arrayItem.container)

      arrayItem.deleteBtn.addEventListener('click', () => {
        const itemIndex = Number(child.path.split(this.instance.jedi.pathSeparator).pop())
        this.instance.deleteItem(itemIndex)
      })

      arrayItem.moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.instance.move(itemIndex, toIndex)
      })

      arrayItem.moveDownBtn.addEventListener('click', () => {
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
