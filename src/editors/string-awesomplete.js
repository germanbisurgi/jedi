import EditorString from './string.js'
import { isSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringAwesomplete instance.
 * @extends EditorString
 */
class EditorStringAwesomplete extends EditorString {
  static resolves (schema) {
    return getSchemaType(schema) === 'string' && isSet(getSchemaXOption(schema, 'awesomplete'))
  }

  build () {
    this.control = this.theme.getInputControl({
      type: 'text',
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })

    try {
      new window.Awesomplete(this.control.input, getSchemaXOption(this.instance.schema, 'awesomplete'))
      this.control.container.querySelector('.awesomplete').style.display = 'block'
    } catch (e) {
      console.error('Awesomplete is not available or not loaded correctly.', e)
    }
  }

  refreshUI () {
    this.refreshInteractiveElements()
  }
}

export default EditorStringAwesomplete
