import StringEditor from './string'
import utils from '../utils'

class StringEnumRadioEditor extends StringEditor {
  build () {
    // input
    const legendText = utils.getSchemaTitle(this.schema) || this.getKey()
    const optionValues = utils.getSchemaEnum(this.schema)
    const optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues
    const radioGroupName = this.path
    const radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName, legendText)
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

      if (this.disabled) {
        radio.setAttribute('disabled', 'disabled')
      } else {
        radio.removeAttribute('disabled')
      }
    })

    if (radio) {
      radio.setAttribute('checked', 'checked')
    }
  }
}

export default StringEnumRadioEditor
