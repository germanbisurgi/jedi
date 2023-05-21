import NumberEditor from './number'
import { isSet } from '../utils'

class NumberEnumRadioEditor extends NumberEditor {
  build () {
    // control
    const control = this.theme.getRadiosControl({
      values: this.instance.schema.enum(),
      titles: this.instance.schema.option('enumTitles') || this.instance.schema.enum(),
      id: this.instance.path,
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    this.control = control.control
    this.radioInputs = control.inputs

    // events
    this.radioInputs.forEach((radio) => {
      radio.addEventListener('change', () => {
        const value = this.sanitize(radio.value)
        this.instance.setValue(value)
      })
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    if (isSet(this.instance.schema.description())) {
      this.control.appendChild(this.description)
    }
    this.control.appendChild(this.messagesSlot)
  }

  refreshUI () {
    this.radioInputs.forEach((radio) => {
      radio.checked = (Number(radio.value) === Number(this.instance.getValue()))
      radio.disabled = this.disabled
    })
  }
}

export default NumberEnumRadioEditor
