import NumberEditor from './number'

class NumberEnumRadioEditor extends NumberEditor {
  prepare () {
    this.optionValues = this.schema.enum()
    this.optionsLabels = this.schema.option('enumTitles') || this.optionValues
  }

  build () {
    this.container.appendChild(this.messagesSlot)

    // fieldset
    const fieldset = this.jedi.theme.getFieldset()
    this.container.appendChild(fieldset)

    // legend
    fieldset.appendChild(this.jedi.theme.getLegend({
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

      // label
      radioContainer.appendChild(this.jedi.theme.getLabel({
        for: this.path + '.' + index,
        textContent: this.optionsLabels[index]
      }))

      fieldset.appendChild(radioContainer)
    })

    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }

    const firstOption = this.optionValues[0]

    if (firstOption) {
      this.setValue(firstOption, false)
    }
  }

  refreshUI () {
    const fieldset = this.container.querySelector('fieldset')
    const radioInputs = fieldset.querySelectorAll('input')

    radioInputs.forEach((radio) => {
      radio.checked = (Number(radio.value) === Number(this.getValue()))
    })

    fieldset.disabled = this.disabled
  }
}

export default NumberEnumRadioEditor
