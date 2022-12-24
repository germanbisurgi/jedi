import BooleanEditor from './boolean'

class BooleanEnumSelectEditor extends BooleanEditor {
  build () {
    // label
    this.container.appendChild(this.jedi.theme.getLabel({
      for: this.path,
      textContent: this.schema.title() || this.getKey()
    }))

    // input
    this.input = this.jedi.theme.getSelect({
      optionValues: ['false', 'true'],
      optionsLabels: this.schema.option('enumTitles') || ['false', 'true'],
      id: this.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      const value = this.input.value === 'true'
      this.setValue(value)
    })

    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }
  }

  refreshUI () {
    this.showValidationErrors()

    this.input.value = this.getValue() === true ? 'true' : 'false'

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEnumSelectEditor
