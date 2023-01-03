import NumberEditor from './number'

class NumberEnumSelectEditor extends NumberEditor {
  build () {
    this.container.appendChild(this.messagesSlot)

    this.container.appendChild(this.jedi.theme.getLabel({
      for: this.path,
      textContent: this.schema.title() ? this.schema.title() : this.getKey()
    }))

    // input
    const optionValues = this.schema.enum()
    const optionsLabels = this.schema.option('enumTitles') || optionValues
    this.input = this.jedi.theme.getSelect({
      optionValues: optionValues,
      optionsLabels: optionsLabels,
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

    const firstOption = optionValues[0]

    if (firstOption) {
      this.setValue(firstOption, false)
    }
  }
}

export default NumberEnumSelectEditor
