import EditorBoolean from './boolean.js'
import { notSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaFormat, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorBooleanEnumSelect instance.
 * @extends EditorBooleanCheckbox
 */
class EditorBooleanEnumSelect extends EditorBoolean {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const schemaFormat = getSchemaFormat(schema)
    const isBooleanWithFormatSelect = schemaType === 'boolean' && schemaFormat === 'select'
    const isBooleanWithoutFormat = schemaType === 'boolean' && notSet(schemaFormat)
    return isBooleanWithFormatSelect || isBooleanWithoutFormat
  }

  build () {
    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.control.input.value === 'true'
      this.instance.setValue(value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue() === true ? 'true' : 'false'
  }
}

export default EditorBooleanEnumSelect
