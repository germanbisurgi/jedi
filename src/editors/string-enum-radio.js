import EditorString from './string.js'
import { getSchemaDescription, getSchemaEnum, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringEnumRadio instance.
 * @extends EditorString
 */
class EditorStringEnumRadio extends EditorString {
  static resolves (schema) {
    return getSchemaType(schema) === 'string' && getSchemaXOption(schema, 'format') === 'radio'
  }

  build () {
    this.control = this.theme.getRadiosControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema),
      inline: getSchemaXOption(this.instance.schema, 'radioInline') || this.instance.jedi.options.radioInline
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
    this.refreshInteractiveElements()
    this.control.radios.forEach((radio) => {
      radio.checked = (radio.value === this.instance.getValue())
    })
  }
}

export default EditorStringEnumRadio
