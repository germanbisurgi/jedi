import EditorString from './string.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringAwesomplete instance.
 * @extends EditorString
 */
class EditorStringAwesomplete extends EditorString {
  static resolves (schema) {
    return window.Awesomplete && getSchemaType(schema) === 'string' && isSet(getSchemaXOption(schema, 'awesomplete'))
  }

  build () {
    this.control = this.theme.getInputControl({
      type: 'text',
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })

    try {
      this.awesomplete = new window.Awesomplete(this.control.input, getSchemaXOption(this.instance.schema, 'awesomplete'))
      this.control.container.querySelector('.awesomplete').style.display = 'block'
    } catch (e) {
      console.error('Awesomplete is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.control.input.addEventListener('awesomplete-selectcomplete', () => {
      this.instance.setValue(this.control.input.value, true, 'editor')
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue()
  }

  destroy () {
    this.awesomplete.destroy()
    super.destroy()
  }
}

export default EditorStringAwesomplete
