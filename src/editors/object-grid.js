import ObjectEditor from './object'

class ObjectGridEditor extends ObjectEditor {
  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    let row = this.theme.getRow()
    this.control.childrenSlot.appendChild(row)

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        const columns = child.schema.option('columns')
        const offset = child.schema.option('offset') || 0
        const col = this.theme.getCol(12, columns, offset)

        if (child.schema.option('newRow')) {
          row = this.theme.getRow()
          this.control.childrenSlot.appendChild(row)
        }

        row.appendChild(col)
        col.appendChild(child.ui.control.container)

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
