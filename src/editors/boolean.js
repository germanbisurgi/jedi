import Editor from './editor'
import { isSet, pathToAttribute } from '../utils'

class BooleanEditor extends Editor {
  build () {
    this.control = this.theme.getCheckboxControl({
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      description: this.instance.schema.description()
    })

    // events
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.checked)
    })

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control.container)
    this.control.container.appendChild(this.messagesSlot)
  }

  sanitize (value) {
    return Boolean(value)
  }

  refreshUI () {
    this.control.input.checked = this.instance.getValue()

    if (this.disabled) {
      this.control.input.setAttribute('disabled', 'disabled')
    } else {
      this.control.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEditor
