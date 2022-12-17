import BooleanEditor from './boolean'
import utils from '../utils'

class BooleanEnumRadioEditor extends BooleanEditor {
  build () {
    // input
    const optionValues = ['false', 'true']
    const optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues

    // fieldset
    const fieldset = this.jedi.theme.getFieldset()
    this.container.appendChild(fieldset)

    // legend
    fieldset.appendChild(this.jedi.theme.getLegend({
      textContent: utils.getSchemaTitle(this.schema) || this.getKey()
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
        const radioValue = radio.value === 'true'
        this.setValue(radioValue)
      })

      // label
      radioContainer.appendChild(this.jedi.theme.getLabel({
        for: this.path + '.' + index,
        textContent: optionsLabels[index]
      }))

      fieldset.appendChild(radioContainer)
    })

    // description
    this.container.appendChild(this.jedi.theme.getDescription({
      textContent: this.schema.description
    }))
  }

  refreshUI () {
    this.showValidationErrors()

    const fieldset = this.container.querySelector('fieldset')
    const radioInputs = fieldset.querySelectorAll('input')

    radioInputs.forEach((radio) => {
      const radioValue = radio.value === 'true'
      radio.checked = radioValue === this.getValue()
    })

    fieldset.disabled = this.disabled
  }
}

export default BooleanEnumRadioEditor
