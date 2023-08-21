import Editor from './editor'
import { pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents a EditorBoolean instance.
 * @extends Editor
 */
class EditorBoolean extends Editor {
  build () {
    this.control = this.theme.getCheckboxControl({
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      srOnly: getSchemaOption(this.instance.schema, 'hideTitle'),
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

export default EditorBoolean
