import Editor from './editor'

class BooleanEditor extends Editor {
  build () {
    // checkbox container
    const checkboxContainer = this.theme.getCheckboxContainer()

    // label
    const label = this.theme.getCheckboxLabel({
      for: this.instance.path,
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
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
    if (this.instance.schema.description()) {
      this.controlSlot.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }

    // appends
    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(checkboxContainer)
    checkboxContainer.appendChild(this.input)
    checkboxContainer.appendChild(label)
    this.controlSlot.appendChild(this.messagesSlot)
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
