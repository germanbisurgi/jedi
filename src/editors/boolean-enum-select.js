import EditorBoolean from './boolean'
import { isSet, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents an EditorBooleanEnumSelect instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumSelect extends EditorBoolean {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')
    const schemaOptionEnumTitles = getSchemaOption(this.instance.schema, 'enumTitles')

    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: schemaOptionEnumTitles || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle,
      description: schemaDescription
    })

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
