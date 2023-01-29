import BooleanEditor from './boolean'

class BooleanEnumRadioEditor extends BooleanEditor {
  build () {
    this.optionValues = ['false', 'true']
    this.optionsLabels = this.instance.schema.option('enumTitles') || this.optionValues
    this.container.appendChild(this.messagesSlot)
    this.radioInputs = []

    // legend
    this.container.appendChild(this.theme.getRadioLegend({
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
        const radioValue = radio.value === 'true'
        this.instance.setValue(radioValue)
      })

      this.radioInputs.push(radio)

      // label
      radioContainer.appendChild(this.theme.getLabel({
        for: this.instance.path + '.' + index,
        textContent: this.optionsLabels[index],
        srOnly: this.instance.schema.option('hideTitle')
      }))

      this.container.appendChild(radioContainer)
    })

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  refreshUI () {
    this.radioInputs.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.instance.getValue()
      radio.disabled = this.disabled
    })
  }
}

export default BooleanEnumRadioEditor
