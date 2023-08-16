import Editor from './editor'
import { isSet, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents a EditorBoolean instance.
 * @extends Editor
 */
class EditorBoolean extends Editor {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')

    this.control = this.theme.getCheckboxControl({
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle,
      description: schemaDescription
    })

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
