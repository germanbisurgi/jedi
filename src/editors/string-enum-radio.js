import StringEditor from './string'

class StringEnumRadioEditor extends StringEditor {
  build () {
    // input
    const optionValues = this.schema.enum()
    const optionsLabels = this.schema.option('enumTitles') || optionValues

    // fieldset
    const fieldset = this.jedi.theme.getFieldset()
    this.container.appendChild(fieldset)

    // legend
    fieldset.appendChild(this.jedi.theme.getLegend({
      textContent: this.schema.title() || this.getKey()
    }))

    // radios
    optionValues.forEach((value, index) => {
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

      radioContainer.appendChild(this.jedi.theme.getLabel({
        for: this.path + '.' + index,
        textContent: optionsLabels[index]
      }))

      fieldset.appendChild(radioContainer)
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

  refreshUI () {
    this.showValidationErrors()

    const fieldset = this.container.querySelector('fieldset')
    const radioInputs = fieldset.querySelectorAll('input')

    radioInputs.forEach((radio) => {
      radio.checked = (radio.value === this.getValue())
    })

    fieldset.disabled = this.disabled
  }
}

export default StringEnumRadioEditor
