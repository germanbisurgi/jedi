import Editor from './editor'
import { isNumber, isSet, pathToAttribute } from '../utils'

class NumberEditor extends Editor {
  build () {
    this.control = this.theme.getInputControl({
      type: 'number',
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
      description: this.instance.schema.description()
    })

    // events
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control.container)
    this.control.container.appendChild(this.messagesSlot)
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
      this.control.input.value = this.instance.getValue()
    }

    if (this.disabled) {
      this.control.input.setAttribute('disabled', 'disabled')
    } else {
      this.control.input.removeAttribute('disabled')
    }
  }
}

export default NumberEditor
