import Editor from './editor'
import { isNumber, isSet, pathToAttribute } from '../helpers/utils'
import {
  getSchemaDescription,
  getSchemaFormat,
  getSchemaOption,
  getSchemaTitle, getSchemaType
} from '../helpers/schema'

/**
 * Represents a EditorNumber instance.
 * @extends Editor
 */
class EditorNumber extends Editor {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaFormat = getSchemaFormat(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')

    this.control = this.theme.getInputControl({
      type: 'number',
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle || schemaFormat === 'hidden',
      description: schemaDescription
    })

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
