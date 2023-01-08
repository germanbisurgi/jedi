import NumberEditor from './number'

class NumberEnumRadioEditor extends NumberEditor {
  prepare () {
    this.optionValues = this.schema.enum()
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
        this.setValue(radio.value)
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
      radio.checked = (Number(radio.value) === Number(this.getValue()))
      radio.disabled = this.disabled
    })
  }
}

export default NumberEnumRadioEditor
