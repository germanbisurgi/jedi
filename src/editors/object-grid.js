import EditorObject from './object.js'
import { getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorObjectGrid instance.
 * @extends EditorObject
 */
class EditorObjectGrid extends EditorObject {
  static resolves (schema) {
    return getSchemaType(schema) === 'object' && getSchemaXOption(schema, 'format') === 'grid'
  }

  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    const gridOptions = getSchemaXOption(this.instance.schema, 'grid') || {
      columns: 12
    }
    let row = this.theme.getRow()
    this.control.childrenSlot.appendChild(row)

    let colCount = 0

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        const childGridOptions = getSchemaXOption(child.schema, 'grid') || {}
        const columns = childGridOptions.columns || gridOptions.columns
        const offset = childGridOptions.offset || 0
        const col = this.theme.getCol(12, columns, offset)
        const newRow = childGridOptions.newRow || false

        colCount += columns + offset

        if (newRow) {
          row = this.theme.getRow()
          this.control.childrenSlot.appendChild(row)
          colCount = 0
        }

        row.appendChild(col)
        col.appendChild(child.ui.control.container)

        if (colCount >= 12) {
          const clearfix = this.theme.getClearfix()
          row.appendChild(clearfix)
          colCount = 0
        }

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
