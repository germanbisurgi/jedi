import Editor from './editor'
import { isSet, pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaFormat, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents a EditorNull instance.
 * @extends Editor
 */
class EditorNull extends Editor {
  build () {
    const schemaTitle = getSchemaTitle(this.instance.schema)
    const schemaDescription = getSchemaDescription(this.instance.schema)
    const schemaFormat = getSchemaFormat(this.instance.schema)
    const schemaOptionHideTitle = getSchemaOption(this.instance.schema, 'hideTitle')

    this.control = this.theme.getNullControl({
      id: pathToAttribute(this.instance.path),
      label: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: schemaOptionHideTitle || schemaFormat === 'hidden',
      description: schemaDescription
    })
  }

  sanitize (value) {
    return null
  }
}

export default EditorNull
