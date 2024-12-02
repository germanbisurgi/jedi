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
    return getSchemaType(schema) === 'array' && isSet(getSchemaXOption(schema, 'table'))
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
    th.textContent = 'item controls'
    table.thead.appendChild(th)

    const tempEditor = this.instance.createItemInstance()

    tempEditor.children.forEach((child) => {
      const th = this.theme.getTableHeader()

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

      deleteBtn.addEventListener('click', () => {
        this.activeTabIndex = clamp((index - 1), 0, (this.instance.value.length - 1))
        this.instance.deleteItem(index)
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
      child.children.forEach((child) => {
        const td = this.theme.getTableDefinition()
        child.ui.adaptForTable(td)
        td.appendChild(child.ui.control.container)
        tbodyRow.appendChild(td)
      })

      table.tbody.appendChild(tbodyRow)
    })

    this.refreshSortable(table.tbody)
    this.refreshInteractiveElements()
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
