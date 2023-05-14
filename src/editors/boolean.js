import Editor from './editor'
import { isSet } from '../utils'

class BooleanEditor extends Editor {
  build () {
    const control = this.theme.getCheckboxControl({
      id: this.instance.path,
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    this.control = control.control
    this.input = control.input

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.checked)
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

  sanitize (value) {
    return Boolean(value)
  }

  refreshUI () {
    this.input.checked = this.instance.getValue()

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEditor
