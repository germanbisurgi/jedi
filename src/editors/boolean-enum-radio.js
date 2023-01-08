import BooleanEditor from './boolean'

class BooleanEnumRadioEditor extends BooleanEditor {
  prepare () {
    this.optionValues = ['false', 'true']
    this.optionsLabels = this.schema.option('enumTitles') || this.optionValues
  }

  build () {
    this.container.appendChild(this.messagesSlot)
    this.radioInputs = []

    // legend
    this.container.appendChild(this.jedi.theme.getRadioLegend({
      textContent: this.schema.title() ? this.schema.title() : this.getKey()
    }))

    // radios
    this.optionValues.forEach((value, index) => {
      // radio container
      const radioContainer = this.jedi.theme.getRadioContainer()

      // radio
      const radio = this.jedi.theme.getRadio({
        value: value,
        id: this.path + '.' + index
      })
      radioContainer.appendChild(radio)

      radio.addEventListener('change', () => {
        const radioValue = radio.value === 'true'
        this.setValue(radioValue)
      })

      this.radioInputs.push(radio)

      // label
      radioContainer.appendChild(this.jedi.theme.getLabel({
        for: this.path + '.' + index,
        textContent: this.optionsLabels[index]
      }))

      this.container.appendChild(radioContainer)
    })

    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }
  }

  refreshUI () {
    this.radioInputs.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.getValue()
      radio.disabled = this.disabled
    })
  }
}

export default BooleanEnumRadioEditor
