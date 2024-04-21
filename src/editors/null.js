import Editor from './editor.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaFormat, getSchemaOption, getSchemaTitle } from '../helpers/schema.js'

/**
 * Represents a EditorNull instance.
 * @extends Editor
 */
class EditorNull extends Editor {
  build () {
    this.control = this.theme.getNullControl({
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      srOnly: getSchemaOption(this.instance.schema, 'hideTitle') || getSchemaFormat(this.instance.schema) === 'hidden',
      description: getSchemaDescription(this.instance.schema)
    })
  }

  sanitize () {
    return null
  }
}

export default EditorNull
