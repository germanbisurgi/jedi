import EditorArray from './array.js'
import { clamp, isSet } from '../helpers/utils.js'
import { getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorArrayTable instance.
 * @extends EditorArray
 */
class EditorArrayTable extends EditorArray {
  static resolves (schema) {
    // todo: and items type object
    return getSchemaType(schema) === 'array' && getSchemaXOption(schema, 'format') === 'table'
  }

  init () {
    super.init()
    this.activeTabIndex = 0
  }

  addEventListeners () {
    this.control.addBtn.addEventListener('click', () => {
      this.activeTabIndex = this.instance.value.length
      this.instance.addItem()
    })
  }

  isSortable () {
    return window.Sortable && isSet(getSchemaXOption(this.instance.schema, 'sortable'))
  }

  refreshUI () {
    this.control.childrenSlot.innerHTML = ''

    const table = this.theme.getTable()

    this.control.childrenSlot.appendChild(table.container)

    // thead labels
    const th = this.theme.getTableHeader()
    th.style.minWidth = '100px'

    table.thead.appendChild(th)

    const tempEditor = this.instance.createItemInstance()

    const tableColWidth = getSchemaXOption(this.instance.schema, 'tableColWidth')

    tempEditor.children.forEach((child) => {
      const itemTableColWidth = getSchemaXOption(child.schema, 'tableColWidth')
      const th = this.theme.getTableHeader({
        minWidth: itemTableColWidth || tableColWidth || 'auto'
      })

      if (child.ui.control.label) {
        th.textContent = child.ui.control.label.textContent
      }

      if (child.ui.control.legend) {
        th.textContent = child.ui.control.legend.textContent
      }

      table.thead.appendChild(th)
    })

    tempEditor.destroy()

    // tbody rows
    this.instance.children.forEach((child, index) => {
      const tbodyRow = document.createElement('tr')

      // buttons
      const buttonsTd = this.theme.getTableDefinition()
      const deleteBtn = this.theme.getDeleteItemBtn()
      const moveUpBtn = this.theme.getMoveUpItemBtn()
      const moveDownBtn = this.theme.getMoveDownItemBtn()
      const btnGroup = this.theme.getBtnGroup()

      if (index === 0) {
        moveUpBtn.setAttribute('always-disabled', true)
      }

      if (index === this.instance.children.length - 1) {
        moveDownBtn.setAttribute('always-disabled', true)
      }

      deleteBtn.addEventListener('click', () => {
        const confirmDeletion = window.confirm('Are you sure you want to delete this item?')

        if (confirmDeletion) {
          this.activeTabIndex = clamp((index - 1), 0, (this.instance.value.length - 1))
          this.instance.deleteItem(index)
        }
      })

      moveUpBtn.addEventListener('click', () => {
        const toIndex = index - 1
        this.activeTabIndex = toIndex
        this.instance.move(index, toIndex)
      })

      moveDownBtn.addEventListener('click', () => {
        const toIndex = index + 1
        this.activeTabIndex = toIndex
        this.instance.move(index, toIndex)
      })

      if (this.isSortable()) {
        const dragBtn = this.theme.getDragItemBtn()
        btnGroup.appendChild(dragBtn)
      }

      btnGroup.appendChild(moveUpBtn)
      btnGroup.appendChild(moveDownBtn)
      btnGroup.appendChild(deleteBtn)
      buttonsTd.appendChild(btnGroup)
      tbodyRow.appendChild(buttonsTd)

      // editors
      if (child.children.length) {
        child.children.forEach((grandchild) => {
          const td = this.theme.getTableDefinition()
          grandchild.ui.adaptForTable(td)
          td.appendChild(grandchild.ui.control.container)
          tbodyRow.appendChild(td)
        })
      } else {
        const td = this.theme.getTableDefinition()
        child.ui.adaptForTable(td)
        td.appendChild(child.ui.control.container)
        tbodyRow.appendChild(td)
      }

      table.tbody.appendChild(tbodyRow)
    })

    this.refreshSortable(table.tbody)
    this.refreshDisabledState()
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
}

export default EditorArrayTable
