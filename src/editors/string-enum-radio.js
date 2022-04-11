import StringEditor from './string'

class StringEnumRadioEditor extends StringEditor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const optionValues = this.schema.enum
    const optionsLabels = this.schema.enumTitles || optionValues
    const radioGroupName = this.path
    const radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName)
    this.container.appendChild(radioGroup)

    // events
    const radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]')
    radioInputs.forEach((radio) => {
      radio.addEventListener('change', () => {
        this.setValue(radio.value)
      })
    })
  }

  refreshUI () {
    const radioGroupName = this.path
    const radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]')
    const radio = this.container.querySelector('[value="' + this.getValue() + '"]')

    radioInputs.forEach((radio) => {
      radio.removeAttribute('checked')
    })

    if (radio) {
      radio.setAttribute('checked', 'checked')
    }
  }
}

export default StringEnumRadioEditor
