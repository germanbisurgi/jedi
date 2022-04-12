import BooleanEditor from './boolean'

class BooleanEnumRadioEditor extends BooleanEditor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const optionValues = ['false', 'true']
    const optionsLabels = this.schema.enumTitles || optionValues
    const radioGroupName = this.path
    const radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName)
    this.container.appendChild(radioGroup)

    // events
    const radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]')
    radioInputs.forEach((radio) => {
      radio.addEventListener('change', () => {
        const value = radio.value === 'true'
        this.setValue(value)
      })
    })
  }

  refreshUI () {
    const radioGroupName = this.path
    const radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]')
    const value = this.getValue() === true ? 'true' : 'false'
    const radio = this.container.querySelector('[value="' + value + '"]')

    radioInputs.forEach((radio) => {
      radio.removeAttribute('checked')
    })

    if (radio) {
      radio.setAttribute('checked', 'checked')
    }
  }
}

export default BooleanEnumRadioEditor