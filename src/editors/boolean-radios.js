import EditorBoolean from './boolean.js'
import { getSchemaDescription, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorRadios instance.
 * @extends EditorBooleanCheckbox
 */
class EditorRadios extends EditorBoolean {
  static resolves (schema) {
    return getSchemaType(schema) === 'boolean' && (getSchemaXOption(schema, 'format') === 'radios' || getSchemaXOption(schema, 'format') === 'radios-inline')
  }

  build () {
    this.control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema),
      inline: getSchemaXOption(this.instance.schema, 'format') === 'radios-inline',
      info: getSchemaXOption(this.instance.schema, 'info')
    })
  }

  adaptForTable () {
    this.theme.adaptForTableRadiosControl(this.control)
  }

  addEventListeners () {
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const radioValue = radio.value === 'true'
        this.instance.setValue(radioValue, true, 'editor')
      })
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.control.radios.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.instance.getValue()
    })
  }
}

export default EditorRadios
