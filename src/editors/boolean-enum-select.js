import BooleanEditor from './boolean'

class BooleanEnumSelectEditor extends BooleanEditor {
  build () {
    this.container.appendChild(this.messagesSlot)

    // label
    this.container.appendChild(this.theme.getLabel({
      for: this.instance.path,
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    }))

    // input
    this.input = this.theme.getSelect({
      optionValues: ['false', 'true'],
      optionsLabels: this.instance.schema.option('enumTitles') || ['false', 'true'],
      id: this.instance.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      const value = this.input.value === 'true'
      this.instance.setValue(value)
    })

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  refreshUI () {
    this.input.value = this.instance.getValue() === true ? 'true' : 'false'

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEnumSelectEditor
