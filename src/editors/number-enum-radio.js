import EditorNumber from './number'
import { isSet, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaEnum, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents an EditorNumberEnumRadio instance.
 * @extends EditorNumber
 */
class EditorNumberEnumRadio extends EditorNumber {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaEnum = getSchemaEnum(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')
    const schemaOptionEnumTitles = getSchemaOption(this.instance.schema, 'enumTitles')

    this.control = this.theme.getRadiosControl({
      values: schemaEnum,
      titles: schemaOptionEnumTitles || schemaEnum,
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle,
      description: schemaDescription
    })

    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const value = this.sanitize(radio.value)
        this.instance.setValue(value)
      })
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.radios.forEach((radio) => {
      radio.checked = (Number(radio.value) === Number(this.instance.getValue()))
    })
  }
}

export default EditorNumberEnumRadio
