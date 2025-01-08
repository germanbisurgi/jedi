import EditorString from './string.js'
import { getSchemaDescription, getSchemaXOption, getSchemaTitle, getSchemaType } from '../helpers/schema.js'

/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorStringInput extends EditorString {
  static resolves (schema) {
    return getSchemaType(schema) === 'string'
  }

  static getTypes () {
    return ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'url', 'week']
  }

  build () {
    const optionFormat = getSchemaXOption(this.instance.schema, 'format')

    this.control = this.theme.getInputControl({
      type: EditorStringInput.getTypes().includes(optionFormat) ? optionFormat : 'text',
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleIconClass: getSchemaXOption(this.instance.schema, 'titleIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden') || optionFormat === 'hidden',
      description: getSchemaDescription(this.instance.schema),
      info: getSchemaXOption(this.instance.schema, 'info')
    })

    // fix color picker bug
    if (optionFormat === 'color' && this.instance.value.length === 0) {
      this.instance.setValue('#000000', false, 'editor')
    }
  }

  adaptForTable () {
    this.theme.adaptForTableInputControl(this.control)
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value, true, 'editor')
    })
  }

  sanitize (value) {
    return String(value)
  }

  refreshUI () {
    this.refreshDisabledState()
    this.control.input.value = this.instance.getValue()
  }
}

export default EditorStringInput
