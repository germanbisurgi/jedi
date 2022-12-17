import Editor from '../editor'
import utils from '../utils'

class StringEditor extends Editor {
  build () {
    // label
    this.container.appendChild(this.jedi.theme.getLabel({
      for: this.path,
      textContent: utils.getSchemaTitle(this.schema) || this.getKey()
    }))

    // input
    // todo file, range should be handled differently
    const inputTypes = ['color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']

    if (this.schema.format === 'textarea') {
      this.input = this.jedi.theme.getTextarea({
        id: this.path
      })
    } else {
      this.input = this.jedi.theme.getInput({
        type: inputTypes.includes(this.schema.format) ? this.schema.format : 'text',
        id: this.path
      })
    }

    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })

    // description
    this.container.appendChild(this.jedi.theme.getDescription({
      textContent: this.schema.description
    }))
  }

  sanitize (value) {
    return String(value)
  }

  refreshUI () {
    super.showValidationErrors()
    this.input.value = this.getValue()

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default StringEditor
