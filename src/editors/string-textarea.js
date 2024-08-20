import EditorString from './string.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaFormat, getSchemaXOption, getSchemaTitle, getSchemaType } from '../helpers/schema.js'

/**
 * Represents a EditorStringTextarea instance.
 * @extends EditorString
 */
class EditorStringTextarea extends EditorString {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const schemaFormat = getSchemaFormat(schema)
    return schemaType === 'string' && schemaFormat === 'textarea'
  }

  build () {
    this.control = this.theme.getTextareaControl({
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden') || getSchemaFormat(this.instance.schema) === 'hidden',
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }
}

export default EditorStringTextarea
