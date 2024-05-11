import EditorBoolean from './boolean.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema.js'

/**
 * Represents an EditorBooleanEnumRadio instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumRadio extends EditorBoolean {
  build () {
    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: getSchemaOption(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
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
