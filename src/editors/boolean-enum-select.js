import BooleanEditor from './boolean'
import { isSet, pathToAttribute } from '../utils'

class BooleanEnumSelectEditor extends BooleanEditor {
  build () {
    // control
    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      description: this.instance.schema.description()
    })

    this.control.input.addEventListener('change', () => {
      const value = this.control.input.value === 'true'
      this.instance.setValue(value)
    })

    this.container.appendChild(this.control.container)
  }

  refreshUI () {
    this.control.input.value = this.instance.getValue() === true ? 'true' : 'false'

    if (this.disabled) {
      this.control.input.setAttribute('disabled', 'disabled')
    } else {
      this.control.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEnumSelectEditor
