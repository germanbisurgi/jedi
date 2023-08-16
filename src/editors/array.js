/* global confirm */

import Editor from './editor'
import { isArray, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents an EditorArray instance.
 * @extends Editor
 */
class EditorArray extends Editor {
  build () {
    this.control = this.theme.getArrayControl({
      title: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      srOnly: getSchemaOption(this.instance.schema, 'hideTitle'),
      id: pathToAttribute(this.instance.path),
      description: getSchemaDescription(this.instance.schema)
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
    this.refreshInteractiveElements()
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

      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable()
      } else {
        child.ui.enable()
      }
    })
  }
}

export default EditorArray
