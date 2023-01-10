import StringEditor from './string'

class StringEnumSelectEditor extends StringEditor {
  prepare () {
    this.optionValues = this.schema.enum()
    this.optionsLabels = this.schema.option('enumTitles') || this.optionValues
  }

  build () {
    this.container.appendChild(this.messagesSlot)

    // label
    this.container.appendChild(this.jedi.theme.getLabel({
      for: this.path,
      textContent: this.schema.title() ? this.schema.title() : this.getKey(),
      srOnly: this.schema.option('hideTitle')
    }))

    // input
    this.input = this.jedi.theme.getSelect({
      optionValues: this.optionValues,
      optionsLabels: this.optionsLabels,
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

    // const firstOption = this.optionValues[0]
    //
    // if (firstOption) {
    //   this.setValue(firstOption, false)
    // }
  }
}

export default StringEnumSelectEditor
