import EditorBooleanCheckbox from './boolean.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaTitle, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorBooleanEnumRadio instance.
 * @extends EditorBooleanCheckbox
 */
class EditorBooleanEnumRadio extends EditorBooleanCheckbox {
  build () {
    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
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
