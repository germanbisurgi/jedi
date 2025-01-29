import EditorNumber from './number.js'
import { isNumber } from '../helpers/utils.js'
import {
  getSchemaXOption,
  getSchemaType
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
      title: this.getTitle(),
      description: this.getDescription(),
      type: 'number',
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, 'titleIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden') || getSchemaXOption(this.instance.schema, 'format') === 'hidden',
      info: getSchemaXOption(this.instance.schema, 'info')
    })

    this.control.input.setAttribute('step', 'any')
  }

  adaptForTable () {
    this.theme.adaptForTableInputControl(this.control)
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value, true, 'editor')
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    const value = this.instance.getValue()

    if (isNumber(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

export default EditorNumberInput
