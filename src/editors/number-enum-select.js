import NumberEditor from './number'
import { isSet, pathToAttribute } from '../utils'

/**
 * Represents an NumberEnumSelectEditor instance.
 * @extends NumberEditor
 */
class NumberEnumSelectEditor extends NumberEditor {
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

    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }
}

export default NumberEnumSelectEditor
