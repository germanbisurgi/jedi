import Editor from './editor.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaFormat, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorNull instance.
 * @extends Editor
 */
class EditorNull extends Editor {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    return schemaType === 'null'
  }

  build () {
    this.control = this.theme.getNullControl({
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden') || getSchemaFormat(this.instance.schema) === 'hidden',
      description: getSchemaDescription(this.instance.schema)
    })
  }

  sanitize () {
    return null
  }
}

export default EditorNull
