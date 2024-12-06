import Editor from './editor.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorNull instance.
 * @extends Editor
 */
class EditorNull extends Editor {
  static resolves (schema) {
    return getSchemaType(schema) === 'null'
  }

  build () {
    this.control = this.theme.getNullControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden') || getSchemaXOption(this.instance.schema, 'format') === 'hidden',
      description: getSchemaDescription(this.instance.schema)
    })
  }

  sanitize () {
    return null
  }
}

export default EditorNull
