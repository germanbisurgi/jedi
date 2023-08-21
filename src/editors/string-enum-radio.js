import EditorString from './string'
import { pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaEnum, getSchemaOption, getSchemaTitle } from '../helpers/schema'

/**
 * Represents a EditorStringEnumRadio instance.
 * @extends Editor
 */
class EditorStringEnumRadio extends EditorString {
  build () {
    this.control = this.theme.getRadiosControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      srOnly: getSchemaOption(this.instance.schema, 'hideTitle'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        this.instance.setValue(radio.value)
      })
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.radios.forEach((radio) => {
      radio.checked = (radio.value === this.instance.getValue())
    })
  }
}

export default EditorStringEnumRadio
