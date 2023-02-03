import NumberEditor from './number'

class NumberEnumSelectEditor extends NumberEditor {
  build () {
    this.optionValues = this.instance.schema.enum()
    this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues

    const label = this.theme.getLabel({
      for: this.instance.path,
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    // input
    this.input = this.theme.getSelect({
      optionValues: this.optionValues,
      optionsLabels: this.optionsLabels,
      id: this.instance.path
    })

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    // description
    if (this.instance.schema.description()) {
      this.controlSlot.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }

    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(label)
    this.controlSlot.appendChild(this.input)
    this.controlSlot.appendChild(this.messagesSlot)
  }
}

export default NumberEnumSelectEditor
