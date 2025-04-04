import Editor from './editor.js'
import { isArray, isSet } from '../helpers/utils.js'
import {
  getSchemaMaxItems,
  getSchemaMinItems,
  getSchemaType,
  getSchemaXOption
} from '../helpers/schema.js'

/**
 * Represents an EditorArray instance.
 * @extends Editor
 */
class EditorArray extends Editor {
  static resolves (schema) {
    return getSchemaType(schema) === 'array'
  }

  build () {
    this.control = this.theme.getArrayControl({
      title: this.getTitle(),
      description: this.getDescription(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      id: this.getIdFromPath(this.instance.path),
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || getSchemaXOption(this.instance.schema, 'enableCollapseToggle'),
      startCollapsed: this.instance.jedi.options.startCollapsed || getSchemaXOption(this.instance.schema, 'startCollapsed'),
      readOnly: this.instance.isReadOnly(),
      info: this.getInfo(),
      arrayAdd: getSchemaXOption(this.instance.schema, 'arrayAdd') ?? this.instance.jedi.options.arrayAdd
    })
  }

  addEventListeners () {
    this.control.addBtn.addEventListener('click', () => {
      this.instance.addItem('user')
    })
  }

  getInvalidFeedback (config) {
    return this.theme.getAlert(config)
  }

  sanitize (value) {
    if (isArray(value)) {
      return value
    }

    return []
  }

  isSortable () {
    return window.Sortable && isSet(getSchemaXOption(this.instance.schema, 'sortable'))
  }

  refreshSortable (container) {
    if (this.isSortable()) {
      if (this.sortable) {
        this.sortable.destroy()
      }

      this.sortable = window.Sortable.create(container, {
        animation: 150,
        handle: '.jedi-array-drag',
        disabled: this.disabled || this.readOnly,
        onEnd: (evt) => {
          this.instance.move(evt.oldIndex, evt.newIndex)
        }
      })
    }
  }

  refreshUI () {
    const maxItems = getSchemaMaxItems(this.instance.schema)
    const minItems = getSchemaMinItems(this.instance.schema)
    const arrayDelete = getSchemaXOption(this.instance.schema, 'arrayDelete') ?? this.instance.jedi.options.arrayDelete
    const arrayMove = getSchemaXOption(this.instance.schema, 'arrayMove') ?? this.instance.jedi.options.arrayMove

    this.control.childrenSlot.innerHTML = ''

    this.instance.children.forEach((child, index) => {
      const itemIndex = Number(child.getKey())
      const deleteBtn = this.theme.getDeleteItemBtn()
      const moveUpBtn = this.theme.getMoveUpItemBtn()
      const moveDownBtn = this.theme.getMoveDownItemBtn()
      const btnGroup = this.theme.getBtnGroup()
      const { container, arrayActions, body } = this.theme.getArrayItem({
        readOnly: this.instance.isReadOnly(),
        index: index
      })

      arrayActions.appendChild(btnGroup)

      if (isSet(arrayDelete) && arrayDelete === true) {
        btnGroup.appendChild(deleteBtn)
      }

      if (isSet(arrayMove) && arrayMove === true) {
        btnGroup.appendChild(moveUpBtn)
        btnGroup.appendChild(moveDownBtn)
      }

      if (index === 0) {
        moveUpBtn.setAttribute('always-disabled', true)
      }

      if (index === this.instance.children.length - 1) {
        moveDownBtn.setAttribute('always-disabled', true)
      }

      if (this.isSortable()) {
        const dragBtn = this.theme.getDragItemBtn()
        btnGroup.appendChild(dragBtn)
      }

      this.control.childrenSlot.appendChild(container)
      body.appendChild(child.ui.control.container)

      deleteBtn.addEventListener('click', () => {
        const confirmDeletion = window.confirm('Are you sure you want to delete this item?')

        if (confirmDeletion) {
          const itemIndex = Number(child.path.split(this.instance.jedi.pathSeparator).pop())
          this.instance.deleteItem(itemIndex, 'user')
        }
      })

      moveUpBtn.addEventListener('click', () => {
        const toIndex = itemIndex - 1
        this.instance.move(itemIndex, toIndex, 'user')
      })

      moveDownBtn.addEventListener('click', () => {
        const toIndex = itemIndex + 1
        this.instance.move(itemIndex, toIndex, 'user')
      })

      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable()
      } else {
        child.ui.enable()
      }

      if (isSet(minItems) && this.instance.value.length <= minItems) {
        deleteBtn.setAttribute('disabled', '')
      }
    })

    this.refreshDisabledState()
    this.refreshSortable(this.control.childrenSlot)

    if (isSet(maxItems) && maxItems === this.instance.value.length) {
      this.control.addBtn.setAttribute('disabled', '')
    }
  }
}

export default EditorArray
