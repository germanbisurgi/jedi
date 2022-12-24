import Editor from '../editor'

class BooleanEditor extends Editor {
  build () {
    // checkbox container
    const checkboxContainer = this.jedi.theme.getCheckboxContainer()

    // label
    const labelText = this.schema.title() || this.getKey()
    const label = this.jedi.theme.getCheckboxLabel({
      for: this.path,
      textContent: labelText
    })

    // input
    this.input = this.jedi.theme.getCheckbox({
      id: this.path
    })

    // appends
    this.container.appendChild(checkboxContainer)
    checkboxContainer.appendChild(this.input)
    checkboxContainer.appendChild(label)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.checked)
    })

    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }
  }

  sanitize (value) {
    return Boolean(value)
  }

  refreshUI () {
    this.showValidationErrors()
    this.input.checked = this.getValue()

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEditor
