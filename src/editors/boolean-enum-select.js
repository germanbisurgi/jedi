import BooleanEditor from './boolean'
import { isSet } from '../utils'

class BooleanEnumSelectEditor extends BooleanEditor {
  build () {
    // control
    const control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: this.instance.schema.option('enumTitles') || ['false', 'true'],
      id: this.instance.path,
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    this.control = control.control
    this.input = control.input

    // events
    this.input.addEventListener('change', () => {
      const value = this.input.value === 'true'
      this.instance.setValue(value)
    })

    // description
    this.description = this.theme.getDescription({
      textContent: this.instance.schema.description()
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    this.control.appendChild(this.messagesSlot)
    this.control.appendChild(this.descriptionSlot)

    if (isSet(this.instance.schema.description())) {
      this.descriptionSlot.appendChild(this.description)
    }
  }

  refreshUI () {
    this.input.value = this.instance.getValue() === true ? 'true' : 'false'

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEnumSelectEditor
