import BooleanEditor from './boolean'
import utils from '../utils'

class BooleanEnumRadioEditor extends BooleanEditor {
  build () {
    // input
    const legendText = utils.getSchemaTitle(this.schema) || this.getKey()
    const optionValues = ['false', 'true']
    const optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues
    const radioGroupName = this.path
    const radioGroup = this.jedi.theme.getRadioGroup(optionValues, optionsLabels, radioGroupName, legendText)
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
