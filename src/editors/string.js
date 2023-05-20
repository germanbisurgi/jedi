import Editor from './editor'
import { isSet } from '../utils'

class StringEditor extends Editor {
  build () {
    const inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']
    let control

    if (this.instance.schema.formatIs('textarea')) {
      control = this.theme.getTextareaControl({
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
      })
    } else {
      control = this.theme.getInputControl({
        type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
        id: this.instance.path,
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
      })
    }

    this.control = control.control
    this.input = control.input

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    // fix color picker bug
    if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
      this.instance.setValue('#000000', false)
    }

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    this.control.appendChild(this.descriptionSlot)
    this.control.appendChild(this.messagesSlot)

    if (isSet(this.instance.schema.description())) {
      this.descriptionSlot.appendChild(this.description)
    }
  }

  sanitize (value) {
    return String(value)
  }

  refreshUI () {
    this.input.value = this.instance.getValue()

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default StringEditor
