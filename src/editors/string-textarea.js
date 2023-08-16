import Editor from './editor'
import { isSet, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaFormat, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents a EditorStringTextarea instance.
 * @extends Editor
 */
class EditorStringTextarea extends Editor {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaFormat = getSchemaFormat(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')

    this.control = this.theme.getTextareaControl({
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle || schemaFormat === 'hidden',
      description: schemaDescription
    })

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

export default EditorStringTextarea
