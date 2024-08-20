import EditorString from './string.js'
import { notSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaFormat, getSchemaXOption, getSchemaTitle, getSchemaType } from '../helpers/schema.js'

/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorStringInput extends EditorString {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const schemaFormat = getSchemaFormat(schema)
    const isStringWithFormatSelect = schemaType === 'string' && this.getTypes().includes(schemaFormat)
    const isStringWithoutFormat = schemaType === 'string' && notSet(schemaFormat)
    return isStringWithFormatSelect || isStringWithoutFormat
  }

  static getTypes () {
    return ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'url', 'week']
  }

  build () {
    const schemaFormat = getSchemaFormat(this.instance.schema)

    this.control = this.theme.getInputControl({
      type: EditorStringInput.getTypes().includes(schemaFormat) ? schemaFormat : 'text',
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden') || schemaFormat === 'hidden',
      description: getSchemaDescription(this.instance.schema)
    })

    // fix color picker bug
    if (schemaFormat === 'color' && this.instance.value.length === 0) {
      this.instance.setValue('#000000', false)
    }
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  sanitize (value) {
    return String(value)
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }
}

export default EditorStringInput
