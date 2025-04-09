import EditorArray from './array.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorArrayTable instance.
 * @extends EditorArray
 */
class EditorArrayTable extends EditorArray {
  static resolves (schema) {
    return getSchemaType(schema) === 'array' && getSchemaXOption(schema, 'format') === 'table'
  }

  addEventListeners () {
    this.control.addBtn.addEventListener('click', () => {
      this.activeItemIndex = this.instance.value.length
      this.instance.addItem('user')
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
    const { label } = this.theme.getFakeLabel({
      content: 'Controls',
      visuallyHidden: true
    })

    th.appendChild(label)

    table.thead.appendChild(th)

    const tempEditor = this.instance.createItemInstance()

    const tableColMinWidth = getSchemaXOption(this.instance.schema, 'tableColMinWidth')

    tempEditor.children.forEach((child) => {
      const itemTableColWidth = getSchemaXOption(child.schema, 'tableColMinWidth')
      const th = this.theme.getTableHeader({
        minWidth: itemTableColWidth || tableColMinWidth || 'auto'
      })

      if (child.ui.control.label && child.ui.control.description) {
        th.appendChild(child.ui.control.label)
        child.ui.control.label.setAttribute('title', child.ui.control.description.textContent)
      }

      if (child.ui.control.legend && child.ui.control.description) {
        th.appendChild(child.ui.control.legend)
        child.ui.control.legend.setAttribute('title', child.ui.control.description.textContent)
      }

      table.thead.appendChild(th)
    })

    tempEditor.destroy()

    const arrayDelete = getSchemaXOption(this.instance.schema, 'arrayDelete') ?? this.instance.jedi.options.arrayDelete
    const arrayMove = getSchemaXOption(this.instance.schema, 'arrayMove') ?? this.instance.jedi.options.arrayMove

    // tbody rows
    this.instance.children.forEach((child, index) => {
      const tbodyRow = document.createElement('tr')

      // buttons
      const buttonsTd = this.theme.getTableDefinition()
      const { deleteBtn, moveUpBtn, moveDownBtn, dragBtn, btnGroup } = this.getButtons(index)

      if (this.isSortable()) {
        btnGroup.appendChild(dragBtn)
      }

      if (isSet(arrayDelete) && arrayDelete === true) {
        btnGroup.appendChild(deleteBtn)
      }

      if (isSet(arrayMove) && arrayMove === true) {
        btnGroup.appendChild(moveUpBtn)
        btnGroup.appendChild(moveDownBtn)
      }

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
    this.refreshScrollPosition(table.container)

    table.container.addEventListener('scroll', () => {
      this.lastScrollTop = table.container.scrollTop
      this.lastScrollLeft = table.container.scrollLeft
    })
  }

  refreshScrollPosition (element) {
    element.scroll({
      top: this.lastScrollTop,
      left: this.lastScrollLeft
    })
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
