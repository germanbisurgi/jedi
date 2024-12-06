import EditorNumber from './number.js'
import { isNumber, isSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaEnum, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorNumberEnumSelect instance.
 * @extends EditorNumber
 */
class EditorNumberEnumSelect extends EditorNumber {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'
    return typeIsNumeric && isSet(getSchemaEnum(schema))
  }

  build () {
    this.control = this.theme.getSelectControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  adaptForTable () {
    this.theme.adaptForTableSelectControl(this.control)
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value, true, 'editor')
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    const value = this.instance.getValue()

    if (isNumber(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

export default EditorNumberEnumSelect
