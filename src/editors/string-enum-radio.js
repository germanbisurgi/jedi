import StringEditor from './string'
import { isSet, pathToAttribute } from '../utils'

class StringEnumRadioEditor extends StringEditor {
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

    // events
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        this.instance.setValue(radio.value)
      })
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control.container)
    this.control.container.appendChild(this.messagesSlot)
  }

  refreshUI () {
    this.control.radios.forEach((radio) => {
      radio.checked = (radio.value === this.instance.getValue())
      radio.disabled = this.disabled
    })
  }
}

export default StringEnumRadioEditor
