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
    const optionsLabels = this.schema.enumTitles || this.schema.enum
    const radioGroupName = this.path
    const radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName)
    this.container.appendChild(radioGroup)

    // events
    const radioInputs = this.container.querySelectorAll('[name="' + radioGroupName + '"]')
    radioInputs.forEach((radioInput) => {
      radioInput.addEventListener('change', () => {
        this.setValue(radioInput.value)
      })
    })
  }

  refreshUI () {
    const radio = this.container.querySelector('[value="' + this.getValue() + '"]')
    if (radio) {
      radio.setAttribute('checked', 'checked')
    }
  }
}

export default StringEnumRadioEditor
