import Editor from '../editor'

class NumberEditor extends Editor {
  build () {
    // label
    this.container.appendChild(this.jedi.theme.getLabel({
      for: this.path,
      textContent: this.schema.enum() ? this.schema.enum() : this.getKey()
    }))

    // input
    this.input = this.jedi.theme.getInput({
      type: 'number',
      id: this.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })

    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }
  }

  sanitize (value) {
    if (this.schema.typeIs('integer')) {
      return Math.floor(Number(value))
    } else {
      return Number(value)
    }
  }

  refreshUI () {
    this.showValidationErrors()
    this.input.value = this.getValue()

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default NumberEditor
