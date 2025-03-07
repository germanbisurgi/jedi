import EditorNumber from './number.js'
import { isNumber, isSet } from '../helpers/utils.js'
import { getSchemaEnum, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorNumberSelect instance.
 * @extends EditorNumber
 */
class EditorNumberSelect extends EditorNumber {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'
    return typeIsNumeric && isSet(getSchemaEnum(schema))
  }

  build () {
    this.control = this.theme.getSelectControl({
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, 'titleIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      info: this.getInfo()
    })
  }

  adaptForTable () {
    this.theme.adaptForTableSelectControl(this.control)
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value, true, 'user')
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    const value = this.instance.getValue()

    if (isNumber(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

export default EditorNumberSelect
