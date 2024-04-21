import EditorObject from './object.js'
import { getSchemaOption } from '../helpers/schema.js'

/**
 * Represents a EditorObjectGrid instance.
 * @extends EditorObject
 */
class EditorObjectGrid extends EditorObject {
  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    let row = this.theme.getRow()
    this.control.childrenSlot.appendChild(row)

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        const columns = getSchemaOption(child.schema, 'columns') || 12
        const offset = getSchemaOption(child.schema, 'offset') || 0
        const col = this.theme.getCol(12, columns, offset)

        if (getSchemaOption(child.schema, 'newRow') === true) {
          row = this.theme.getRow()
          this.control.childrenSlot.appendChild(row)
        }

        row.appendChild(col)
        col.appendChild(child.ui.control.container)

        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      }
    })
  }
}

export default EditorObjectGrid
