import EditorString from './string.js'
import { getSchemaDescription, getSchemaXOption, getSchemaTitle, getSchemaType } from '../helpers/schema.js'

/**
 * Represents a EditorStringTextarea instance.
 * @extends EditorString
 */
class EditorStringTextarea extends EditorString {
  static resolves (schema) {
    return getSchemaType(schema) === 'string' && getSchemaXOption(schema, 'format') === 'textarea'
  }

  build () {
    this.control = this.theme.getTextareaControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  adaptForTable () {
    this.theme.adaptForTableTextareaControl(this.control)
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value, true, 'editor')
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }
}

export default EditorStringTextarea
