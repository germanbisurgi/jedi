import EditorString from './string.js'
import { getSchemaEnum, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringRadios instance.
 * @extends EditorString
 */
class EditorStringRadios extends EditorString {
  static resolves (schema) {
    return getSchemaType(schema) === 'string' && (getSchemaXOption(schema, 'format') === 'radios' || getSchemaXOption(schema, 'format') === 'radios-inline')
  }

  build () {
    this.control = this.theme.getRadiosControl({
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
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
