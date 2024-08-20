import EditorNumber from './number.js'
import { isNumber, pathToAttribute } from '../helpers/utils.js'
import {
  getSchemaDescription,
  getSchemaFormat,
  getSchemaXOption,
  getSchemaTitle, getSchemaType
} from '../helpers/schema.js'

/**
 * Represents a EditorNumber instance.
 * @extends EditorNumber
 */
class EditorNumberInput extends EditorNumber {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    return schemaType === 'number' || schemaType === 'integer'
  }

  build () {
    this.control = this.theme.getInputControl({
      type: 'number',
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden') || getSchemaFormat(this.instance.schema) === 'hidden',
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    const value = this.instance.getValue()

    if (isNumber(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

export default EditorNumberInput
