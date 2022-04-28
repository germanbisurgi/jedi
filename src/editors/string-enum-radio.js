import StringEditor from './string'
import utils from '../utils'

class StringEnumRadioEditor extends StringEditor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const optionValues = utils.getSchemaEnum(this.schema)
    const optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues
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
