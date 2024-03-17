import Editor from './editor'
import { pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaFormat, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents a EditorCircular instance.
 * @extends Editor
 */
class EditorCircular extends Editor {
  build () {
    this.control = this.theme.getCircularControl()
  }
}

export default EditorCircular
