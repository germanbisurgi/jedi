import Editor from './editor.js'
import { isNumber, pathToAttribute } from '../helpers/utils.js'
import {
  getSchemaDescription,
  getSchemaFormat,
  getSchemaOption,
  getSchemaTitle, getSchemaType
} from '../helpers/schema.js'

/**
 * Represents a EditorNumber instance.
 * @extends Editor
 */
class EditorNumber extends Editor {
  build () {
    this.control = this.theme.getInputControl({
      type: 'number',
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaOption(this.instance.schema, 'titleHidden') || getSchemaFormat(this.instance.schema) === 'hidden',
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }

  sanitize (value) {
    if (getSchemaType(this.instance.schema) === 'integer') {
      return Math.floor(Number(value))
    } else {
      return Number(value)
    }
  }

  refreshUI () {
    this.refreshInteractiveElements()
    const value = this.instance.getValue()

    if (isNumber(value)) {
      this.control.input.value = this.instance.getValue()
    }
  }
}

export default EditorNumber
