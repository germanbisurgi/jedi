import EditorString from './string'
import { isSet, pathToAttribute } from '../utils'

/**
 * Represents a EditorStringEnumSelect instance.
 * @extends Editor
 */
class EditorStringEnumSelect extends EditorString {
  build () {
    // control
    this.control = this.theme.getSelectControl({
      values: this.instance.schema.enum(),
      titles: this.instance.schema.option('enumTitles') || this.instance.schema.enum(),
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      description: this.instance.schema.description()
    })

    // events
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }
}

export default EditorStringEnumSelect
