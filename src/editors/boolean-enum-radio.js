import BooleanEditor from './boolean'
import { isSet } from '../utils'

class BooleanEnumRadioEditor extends BooleanEditor {
  build () {
    // control
    const control = this.theme.getRadiosControl({
      values: ['false', 'true'],
      titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
      id: this.instance.path,
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    this.control = control.control
    this.radioInputs = control.inputs

    // events
    this.radioInputs.forEach((radio) => {
      radio.addEventListener('change', () => {
        const radioValue = radio.value === 'true'
        this.instance.setValue(radioValue)
      })
    })

    // description
    this.description = this.theme.getDescription({
      textContent: this.instance.schema.description()
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    this.controlSlot.appendChild(this.descriptionSlot)
    this.controlSlot.appendChild(this.messagesSlot)

    if (isSet(this.instance.schema.description())) {
      this.descriptionSlot.appendChild(this.description)
    }
  }

  refreshUI () {
    this.radioInputs.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.instance.getValue()
      radio.disabled = this.disabled
    })
  }
}

export default BooleanEnumRadioEditor
