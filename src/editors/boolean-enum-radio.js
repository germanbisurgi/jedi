import EditorBoolean from './boolean'
import { isSet, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents an EditorBooleanEnumRadio instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumRadio extends EditorBoolean {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')
    const schemaOptionEnumTitles = getSchemaOption(this.instance.schema, 'enumTitles')

    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: schemaOptionEnumTitles || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle,
      description: schemaDescription
    })

    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const radioValue = radio.value === 'true'
        this.instance.setValue(radioValue)
      })
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.radios.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.instance.getValue()
    })
  }
}

export default EditorBooleanEnumRadio
