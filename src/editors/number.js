import Editor from './editor'
import { isNumber, isSet } from '../utils'

class NumberEditor extends Editor {
  build () {
    const control = this.theme.getInputControl({
      type: 'number',
      id: this.instance.path,
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
    })

    this.control = control.control
    this.input = control.input

    // events
    this.input.addEventListener('change', () => {
      const value = this.sanitize(this.input.value)
      this.instance.setValue(value)
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    if (isSet(this.instance.schema.description())) {
      this.control.appendChild(this.description)
    }
    this.control.appendChild(this.messagesSlot)
  }

  sanitize (value) {
    if (this.instance.schema.typeIs('integer')) {
      return Math.floor(Number(value))
    } else {
      return Number(value)
    }
  }

  refreshUI () {
    const value = this.instance.getValue()

    if (isNumber(value)) {
      this.input.value = this.instance.getValue()
    }

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default NumberEditor
