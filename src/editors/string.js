import Editor from './editor'
import { isSet } from '../utils'

class StringEditor extends Editor {
  build () {
    // label
    const label = this.theme.getLabel({
      for: this.instance.path,
      textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden')
    })

    // input
    // todo file, range should be handled differently
    const inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']

    if (this.instance.schema.formatIs('textarea')) {
      this.input = this.theme.getTextarea({
        id: this.instance.path
      })
    } else {
      this.input = this.theme.getInput({
        type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
        id: this.instance.path
      })
    }

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    // fix color picker bug
    if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
      this.instance.setValue('#000000', false)
    }

    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(label)
    this.controlSlot.appendChild(this.input)
    this.controlSlot.appendChild(this.messagesSlot)

    // description
    if (isSet(this.instance.schema.description())) {
      this.controlSlot.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
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
