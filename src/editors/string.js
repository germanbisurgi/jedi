import Editor from './editor.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaFormat, getSchemaOption, getSchemaTitle } from '../helpers/schema.js'

/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorString extends Editor {
  build () {
    const inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']
    const schemaFormat = getSchemaFormat(this.instance.schema)

    this.control = this.theme.getInputControl({
      type: inputTypes.includes(schemaFormat) ? schemaFormat : 'text',
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaOption(this.instance.schema, 'titleHidden') || schemaFormat === 'hidden',
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

export default EditorString
