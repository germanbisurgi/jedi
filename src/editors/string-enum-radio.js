import StringEditor from './string'

class StringEnumRadioEditor extends StringEditor {
  build () {
    this.optionValues = this.instance.schema.enum()
    this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues
    this.radioInputs = []

    // legend
    this.controlSlot.appendChild(this.theme.getRadioLegend({
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey()
    }))

    // radios
    this.optionValues.forEach((value, index) => {
      // radio container
      const radioContainer = this.theme.getRadioContainer()

      // radio
      const radio = this.theme.getRadio({
        value: value,
        id: this.instance.path + '.' + index
      })
      radioContainer.appendChild(radio)

      radio.addEventListener('change', () => {
        this.instance.setValue(radio.value)
      })

      this.radioInputs.push(radio)

      // label
      radioContainer.appendChild(this.theme.getLabel({
        for: this.instance.path + '.' + index,
        textContent: this.optionsLabels[index],
        srOnly: this.instance.schema.option('hideTitle')
      }))

      this.controlSlot.appendChild(radioContainer)
    })

    this.controlSlot.appendChild(this.messagesSlot)
    this.container.appendChild(this.controlSlot)

    // description
    if (this.instance.schema.description()) {
      this.controlSlot.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  refreshUI () {
    this.radioInputs.forEach((radio) => {
      radio.checked = (radio.value === this.instance.getValue())
      radio.disabled = this.disabled
    })
  }
}

export default StringEnumRadioEditor
