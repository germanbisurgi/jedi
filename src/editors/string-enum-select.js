import EditorString from './string'
import { isSet, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaEnum, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents a EditorStringEnumSelect instance.
 * @extends Editor
 */
class EditorStringEnumSelect extends EditorString {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaEnum = getSchemaEnum(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')
    const schemaOptionEnumTitles = getSchemaOption(this.instance.schema, 'enumTitles')

    this.control = this.theme.getSelectControl({
      values: schemaEnum,
      titles: schemaOptionEnumTitles || schemaEnum,
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle,
      description: schemaDescription
    })

    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }
}

export default EditorStringEnumSelect
