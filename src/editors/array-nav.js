import EditorArray from './array.js'
import { clamp, compileTemplate, isSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorArrayNav instance.
 * @extends EditorArray
 */
class EditorArrayNav extends EditorArray {
  static resolves (schema) {
    return getSchemaType(schema) === 'array' && getSchemaXOption(schema, 'format') === 'nav'
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
    this.refreshDisabledState()
    this.control.childrenSlot.innerHTML = ''

    const navOptions = getSchemaXOption(this.instance.schema, 'nav') || {}
    const navVariant = navOptions.variant ?? 'pills'
    const navStacked = navOptions.stacked ?? false
    const navColumns = navOptions.columns ?? 4

    const row = this.theme.getRow()
    const tabListCol = this.theme.getCol(12, navColumns)
    const tabContentCol = this.theme.getCol(12, (12 - navColumns))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: navStacked,
      variant: navVariant
    })

    this.control.childrenSlot.appendChild(row)
    row.appendChild(tabListCol)
    row.appendChild(tabContentCol)
    tabListCol.appendChild(tabList)
    tabContentCol.appendChild(tabContent)

    this.instance.children.forEach((child, index) => {
      const deleteBtn = this.theme.getDeleteItemBtn()
      const moveUpBtn = this.theme.getMoveUpItemBtn()
      const moveDownBtn = this.theme.getMoveDownItemBtn()

      child.ui.control.arrayActions.innerHTML = ''
      child.ui.control.arrayActions.appendChild(deleteBtn)
      child.ui.control.arrayActions.appendChild(moveUpBtn)
      child.ui.control.arrayActions.appendChild(moveDownBtn)

      this.control.childrenSlot.appendChild(child.ui.control.container)

      let childTitle
      const schemaOptionTitleTemplate = getSchemaXOption(this.instance.schema, 'titleTemplate')

      if (schemaOptionTitleTemplate) {
        const template = schemaOptionTitleTemplate
        const data = {
          i0: index,
          i1: (index + 1),
          value: child.getValue()
        }
        childTitle = compileTemplate(template, data)
      } else {
        const schemaTitle = getSchemaTitle(child.schema)
        childTitle = isSet(schemaTitle) ? schemaTitle + ' ' + (index + 1) : child.getKey()
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

      const active = index === this.activeTabIndex
      const id = pathToAttribute(child.path)

      const tab = this.theme.getTab({
        hasErrors: child.children.some((grandChild) => grandChild.ui.showingValidationErrors),
        title: childTitle,
        id: id,
        active: active
      })

      tab.list.addEventListener('click', () => {
        this.activeTabIndex = index
      })

      this.theme.setTabPaneAttributes(child.ui.control.container, active, id)
      tabList.appendChild(tab.list)
      tabContent.appendChild(child.ui.control.container)

      if (this.disabled || this.instance.isReadOnly()) {
        child.ui.disable()
      } else {
        child.ui.enable()
      }

      if (index === 0) {
        moveUpBtn.setAttribute('disabled', '')
      }

      if ((this.instance.value.length - 1) === index) {
        moveDownBtn.setAttribute('disabled', '')
      }
    })
  }
}

export default EditorArrayNav
