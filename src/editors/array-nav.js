import ArrayEditor from './array'
import { compileTemplate, isSet, pathToAttribute } from '../utils'

class ArrayNavEditor extends ArrayEditor {
  init () {
    super.init()
    this.activeTabIndex = 0
  }

  refreshUI () {
    this.control.childrenSlot.innerHTML = ''

    const row = this.theme.getRow()
    const cols = this.instance.schema.option('nav').cols || 3
    const tabListCol = this.theme.getCol(12, cols)
    const tabContentCol = this.theme.getCol(12, (12 - cols))
    const tabContent = this.theme.getTabContent()
    const tabList = this.theme.getTabList({
      stacked: this.instance.schema.option('nav').stacked,
      type: this.instance.schema.option('nav').type
    })

    this.control.childrenSlot.appendChild(row)
    row.appendChild(tabListCol)
    row.appendChild(tabContentCol)
    tabListCol.appendChild(tabList)
    tabContentCol.appendChild(tabContent)

    this.instance.children.forEach((child, index) => {
      const itemIndex = Number(child.getKey())

      let childTitle

      if (this.instance.schema.option('itemTemplate')) {
        const template = this.instance.schema.option('itemTemplate')
        const data = {
          i0: index,
          i1: (index + 1),
          value: child.getValue()
        }
        childTitle = compileTemplate(template, data)
      } else {
        childTitle = isSet(child.schema.title()) ? child.schema.title() + ' ' + (index + 1) : child.getKey()
      }

      const arrayItem = this.theme.getArrayItem({
        legend: childTitle + ' ' + itemIndex,
        srOnly: true
      })

      arrayItem.childrenSlot.appendChild(child.ui.control.container)

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

      const active = index === this.activeTabIndex
      const id = pathToAttribute(child.path)

      const tab = this.theme.getTab({
        title: childTitle,
        id: id,
        active: active
      })

      tab.list.addEventListener('click', () => {
        this.activeTabIndex = index
      })

      this.theme.setTabPaneAttributes(arrayItem.container, active, id)
      tabList.appendChild(tab.list)
      tabContent.appendChild(arrayItem.container)

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

export default ArrayNavEditor
