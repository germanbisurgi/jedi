import EditorBoolean from './boolean.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaXOption, getSchemaTitle, getSchemaType } from '../helpers/schema.js'

/**
 * Represents a EditorBooleanCheckbox instance.
 * @extends Editor
 */
class EditorBooleanCheckbox extends EditorBoolean {
  static resolves (schema) {
    return getSchemaType(schema) === 'boolean' && getSchemaXOption(schema, 'format') === 'checkbox'
  }

  build () {
    this.control = this.theme.getCheckboxControl({
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.checked)
    })
  }

  sanitize (value) {
    return Boolean(value)
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.checked = this.instance.getValue()
  }
}

export default EditorBooleanCheckbox
