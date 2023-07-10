import ObjectEditor from './object'

class ObjectGridEditor extends ObjectEditor {
  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    let row = this.theme.getRow()
    this.control.childrenSlot.appendChild(row)

    this.instance.children.forEach((child) => {
      child.ui.control.container.classList.add(this.theme.getMobileColumnClass())

      const columns = child.schema.option('columns')
      const offset = child.schema.option('offset')

      if (columns) {
        child.ui.control.container.classList.add(this.theme.getDesktopColumnClass(columns))
      }

      if (offset) {
        child.ui.control.container.classList.add(this.theme.getDesktopOffsetClass(offset))
      }

      if (child.isActive) {
        if (child.schema.option('newRow')) {
          row = this.theme.getRow()
          this.control.childrenSlot.appendChild(row)
        }

        row.appendChild(child.ui.control.container)

        if (this.disabled) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      }
    })
  }
}

export default ObjectGridEditor
