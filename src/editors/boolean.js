import Editor from './editor'
import { isSet } from '../utils'

class BooleanEditor extends Editor {
  build () {
    // checkbox container
    this.control = this.theme.getCheckboxContainer()

    // label
    const label = this.theme.getCheckboxLabel({
      for: this.instance.path,
      textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    // input
    this.input = this.theme.getCheckbox({
      id: this.instance.path
    })

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
    this.controlSlot.appendChild(this.messagesSlot)
    this.controlSlot.appendChild(this.descriptionSlot)
    this.control.appendChild(this.input)
    this.control.appendChild(label)

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
