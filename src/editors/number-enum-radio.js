import NumberEditor from './number'
import { isSet, pathToAttribute } from '../utils'

class NumberEnumRadioEditor extends NumberEditor {
  build () {
    // control
    this.control = this.theme.getRadiosControl({
      values: this.instance.schema.enum(),
      titles: this.instance.schema.option('enumTitles') || this.instance.schema.enum(),
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      description: this.instance.schema.description()
    })

    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const value = this.sanitize(radio.value)
        this.instance.setValue(value)
      })
    })

    this.container.appendChild(this.control.container)
  }

  refreshUI () {
    this.control.radios.forEach((radio) => {
      radio.checked = (Number(radio.value) === Number(this.instance.getValue()))
      radio.disabled = this.disabled
    })
  }
}

export default NumberEnumRadioEditor
