import EditorString from './string.js'
import { isSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaEnum, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringEnumSelect instance.
 * @extends EditorString
 */
class EditorStringEnumSelect extends EditorString {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const schemaEnum = getSchemaEnum(schema)
    return schemaType === 'string' && isSet(schemaEnum)
  }

  build () {
    this.control = this.theme.getSelectControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }
}

export default EditorStringEnumSelect
