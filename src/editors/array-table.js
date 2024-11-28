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

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.childrenSlot.innerHTML = ''

    const table = this.theme.getTable()

    this.control.childrenSlot.appendChild(table.container)

    // thead labels
    const tempEditor = this.instance.createItemInstance()

    tempEditor.children.forEach((child) => {
      const th = document.createElement('th')

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

      child.children.forEach((child) => {
        const td = document.createElement('td')
        child.ui.buildTableCell(td)

        td.style.verticalAlign = 'middle'
        td.appendChild(child.ui.control.container)
        tbodyRow.appendChild(td)

        // todo: add aria label by table header
      })

      // buttons
      const buttonsTd = document.createElement('td')
      buttonsTd.style.verticalAlign = 'middle'

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

      btnGroup.appendChild(deleteBtn)
      btnGroup.appendChild(moveUpBtn)
      btnGroup.appendChild(moveDownBtn)
      buttonsTd.appendChild(btnGroup)
      tbodyRow.appendChild(buttonsTd)

      table.tbody.appendChild(tbodyRow)
    })
  }
}

export default EditorArrayTable
