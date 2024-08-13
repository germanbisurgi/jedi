import EditorString from './string.js'
import { pathToAttribute } from '../helpers/utils.js'
import {getSchemaDescription, getSchemaOption, getSchemaTitle, getSchemaXOption} from '../helpers/schema.js'

/**
 * Represents a EditorStringAwesomplete instance.
 * @extends Editor
 */
class EditorStringAwesomplete extends EditorString {
  build () {
    this.control = this.theme.getInputControl({
      type: 'text',
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })

    try {
      new window.Awesomplete(this.control.input, getSchemaXOption(this.instance.schema, 'awesomplete'))
      this.control.container.querySelector('.awesomplete').style.display = 'block'
    } catch (e) {
      console.error('Awesomplete is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
  }

  refreshUI () {
    this.refreshInteractiveElements()

    // this.control.radios.forEach((radio) => {
    //   radio.checked = (radio.value === this.instance.getValue())
    // })
  }
}

export default EditorStringAwesomplete
