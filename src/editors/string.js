import Editor from './editor'
import { isSet, pathToAttribute } from '../utils'

class StringEditor extends Editor {
  build () {
    const inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']

    if (this.instance.schema.formatIs('textarea')) {
      this.control = this.theme.getTextareaControl({
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
        description: this.instance.schema.description()
      })
    } else {
      this.control = this.theme.getInputControl({
        type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
        id: pathToAttribute(this.instance.path),
        label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
        srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
        description: this.instance.schema.description()
      })
    }

    // events
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })

    // fix color picker bug
    if (this.instance.schema.formatIs('color') && this.instance.value.length === 0) {
      this.instance.setValue('#000000', false)
    }

    this.container.appendChild(this.control.container)
  }

  sanitize (value) {
    return String(value)
  }

  refreshUI () {
    this.control.input.value = this.instance.getValue()

    if (this.disabled) {
      this.control.input.setAttribute('disabled', 'disabled')
    } else {
      this.control.input.removeAttribute('disabled')
    }
  }
}

export default StringEditor
