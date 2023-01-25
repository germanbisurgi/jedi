import StringEditor from './string'

class StringEnumSelectEditor extends StringEditor {
  build () {
    this.optionValues = this.instance.schema.enum()
    this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues
    this.container.appendChild(this.messagesSlot)

    // label
    this.container.appendChild(this.theme.getLabel({
      for: this.instance.path,
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    }))

    // input
    this.input = this.theme.getSelect({
      optionValues: this.optionValues,
      optionsLabels: this.optionsLabels,
      id: this.instance.path
    })

    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }
}

export default StringEnumSelectEditor
