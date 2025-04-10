import Editor from './editor.js'
import { clamp, isArray, isSet } from '../helpers/utils.js'
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

  init () {
    super.init()
    this.activeItemIndex = 0
  }

  build () {
    this.control = this.theme.getArrayControl({
      title: this.getTitle(),
      description: this.getDescription(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      id: this.getIdFromPath(this.instance.path),
      enableCollapseToggle: getSchemaXOption(this.instance.schema, 'enableCollapseToggle') ?? this.instance.jedi.options.enableCollapseToggle,
      startCollapsed: getSchemaXOption(this.instance.schema, 'startCollapsed') ?? this.instance.jedi.options.startCollapsed,
      readOnly: this.instance.isReadOnly(),
      info: this.getInfo(),
      arrayAdd: getSchemaXOption(this.instance.schema, 'arrayAdd') ?? this.instance.jedi.options.arrayAdd,
      arrayAddContent: getSchemaXOption(this.instance.schema, 'arrayAddContent') ?? this.instance.jedi.translator.translate('arrayAdd'),
      collapseToggleContent: getSchemaXOption(this.instance.schema, 'collapseToggleContent') ?? this.instance.jedi.translator.translate('collapseToggle')
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

  getButtons (index) {
    const schemaDeleteContent = getSchemaXOption(this.instance.schema, 'arrayDeleteContent')
    const schemaMoveUpContent = getSchemaXOption(this.instance.schema, 'arrayMoveUpContent')
    const schemaMoveDownContent = getSchemaXOption(this.instance.schema, 'arrayMoveDownContent')
    const schemaDragContent = getSchemaXOption(this.instance.schema, 'arrayDragContent')

    const deleteBtn = this.theme.getDeleteItemBtn({
      content: schemaDeleteContent ?? this.instance.jedi.translator.translate('arrayDelete')
    })

    const moveUpBtn = this.theme.getMoveUpItemBtn({
      content: schemaMoveUpContent ?? this.instance.jedi.translator.translate('arrayMoveUp')
    })

    const moveDownBtn = this.theme.getMoveDownItemBtn({
      content: schemaMoveDownContent ?? this.instance.jedi.translator.translate('arrayMoveDown')
    })

    const dragBtn = this.theme.getDragItemBtn({
      content: schemaDragContent ?? this.instance.jedi.translator.translate('arrayDrag')
    })

    const btnGroup = this.theme.getBtnGroup()

    deleteBtn.addEventListener('click', () => {
      const confirmDeletion = window.confirm(this.instance.jedi.translator.translate('arrayConfirmDelete'))

      if (confirmDeletion) {
        this.activeItemIndex = clamp((index - 1), 0, (this.instance.value.length - 1))
        this.instance.deleteItem(index, 'user')
      }
    })

    moveUpBtn.addEventListener('click', () => {
      const toIndex = index - 1
      this.activeItemIndex = toIndex
      this.instance.move(index, toIndex, 'user')
    })

    moveDownBtn.addEventListener('click', () => {
      const toIndex = index + 1
      this.activeItemIndex = toIndex
      this.instance.move(index, toIndex, 'user')
    })

    if (index === 0) {
      moveUpBtn.setAttribute('always-disabled', true)
    }

    if (index === this.instance.children.length - 1) {
      moveDownBtn.setAttribute('always-disabled', true)
    }

    return { deleteBtn, moveUpBtn, moveDownBtn, btnGroup, dragBtn }
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
      const { deleteBtn, moveUpBtn, moveDownBtn, dragBtn, btnGroup } = this.getButtons(index)
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

      if (this.isSortable()) {
        btnGroup.appendChild(dragBtn)
      }

      this.control.childrenSlot.appendChild(container)
      body.appendChild(child.ui.control.container)

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
