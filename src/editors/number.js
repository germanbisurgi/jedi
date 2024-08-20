import Editor from './editor.js'
import { getSchemaType } from '../helpers/schema.js'

/**
 * Represents a EditorNumber instance.
 * @extends Editor
 */
class EditorNumber extends Editor {
  sanitize (value) {
    if (getSchemaType(this.instance.schema) === 'integer') {
      return Math.floor(Number(value))
    } else {
      return Number(value)
    }
  }
}

export default EditorNumber
