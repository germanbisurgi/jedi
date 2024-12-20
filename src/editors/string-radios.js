import EditorString from './string.js'
import { getSchemaDescription, getSchemaEnum, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringRadios instance.
 * @extends EditorString
 */
class EditorStringRadios extends EditorString {
  static resolves (schema) {
    return getSchemaType(schema) === 'string' && getSchemaXOption(schema, 'format') === 'radios'
  }

  build () {
    this.control = this.theme.getRadiosControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema),
      inline: getSchemaXOption(this.instance.schema, 'radiosInline') || this.instance.jedi.options.radiosInline,
      info: getSchemaXOption(this.instance.schema, 'info')
    })
  }

  adaptForTable () {
    this.theme.adaptForTableRadiosControl(this.control)
  }

  addEventListeners () {
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        this.instance.setValue(radio.value, true, 'editor')
      })
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.control.radios.forEach((radio) => {
      radio.checked = (radio.value === this.instance.getValue())
    })
  }
}

export default EditorStringRadios
