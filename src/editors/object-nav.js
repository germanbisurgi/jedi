import EditorObject from './object.js'
import { isSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorObjectNav instance.
 * @extends EditorObject
 */
class EditorObjectNav extends EditorObject {
  static resolves (schema) {
    return getSchemaType(schema) === 'object' && isSet(getSchemaXOption(schema, 'nav'))
  }

  init () {
    super.init()
    this.activeTabIndex = 0
  }

  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    const nav = getSchemaXOption(this.instance.schema, 'nav')
    const row = this.theme.getRow()
    const cols = isSet(nav.cols) ? nav.cols : 4
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: isSet(nav.stacked) ? nav.stacked : false,
      type: isSet(nav.variant) ? nav.variant : 'pils'
    })

    this.control.childrenSlot.appendChild(row)
    row.appendChild(tabListCol)
    row.appendChild(tabContentCol)
    tabListCol.appendChild(tabList)
    tabContentCol.appendChild(tabContent)

    this.instance.children.forEach((child, index) => {
      if (child.isActive) {
        const active = index === this.activeTabIndex
        const id = pathToAttribute(child.path)
        const schemaTitle = getSchemaTitle(child.schema)

        const tab = this.theme.getTab({
          hasErrors: child.children.some((grandChild) => grandChild.ui.uiHasErrors),
          title: isSet(schemaTitle) ? schemaTitle : child.getKey(),
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
      }
    })
  }
}

export default EditorObjectNav
