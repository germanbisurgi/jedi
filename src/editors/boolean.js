import Editor from './editor.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema.js'

/**
 * Represents a EditorBooleanCheckbox instance.
 * @extends Editor
 */
class EditorBooleanCheckbox extends Editor {
  build () {
    this.control = this.theme.getCheckboxControl({
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaOption(this.instance.schema, 'titleHidden'),
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
