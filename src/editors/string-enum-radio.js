import StringEditor from './string'
import { isSet } from '../utils'

class StringEnumRadioEditor extends StringEditor {
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
        this.instance.setValue(radio.value)
      })
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    this.control.appendChild(this.descriptionSlot)
    this.control.appendChild(this.messagesSlot)

    if (isSet(this.instance.schema.description())) {
      this.descriptionSlot.appendChild(this.description)
    }
  }

  refreshUI () {
    this.radioInputs.forEach((radio) => {
      radio.checked = (radio.value === this.instance.getValue())
      radio.disabled = this.disabled
    })
  }
}

export default StringEnumRadioEditor
