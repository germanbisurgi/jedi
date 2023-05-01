import Editor from './editor'
import { isNumber, isSet } from '../utils'

class NumberEditor extends Editor {
  build () {
    // label
    const label = this.theme.getLabel({
      for: this.instance.path,
      textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    // input
    this.input = this.theme.getInput({
      type: 'number',
      id: this.instance.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      const value = this.sanitize(this.input.value)
      this.instance.setValue(value)
    })

    // description
    this.description = this.theme.getDescription({
      textContent: this.instance.schema.description()
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(label)
    this.controlSlot.appendChild(this.input)
    this.controlSlot.appendChild(this.messagesSlot)
    this.controlSlot.appendChild(this.descriptionSlot)

    if (isSet(this.instance.schema.description())) {
      this.controlSlot.appendChild(this.description)
    }
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
