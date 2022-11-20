import BooleanEditor from './boolean'
import utils from '../utils'

class BooleanEnumRadioEditor extends BooleanEditor {
  build () {
    // input
    const legendText = utils.getSchemaTitle(this.schema) || this.getKey()
    const optionValues = ['false', 'true']
    const optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues

    // fieldset
    const fieldset = this.jedi.theme.getFieldset()
    this.container.appendChild(fieldset)

    // legend
    const legend = this.jedi.theme.getLegend(legendText)
    fieldset.appendChild(legend)

    // radios
    optionValues.forEach((value, index) => {
      // radio container
      const radioContainer = this.jedi.theme.getRadioContainer()

      // radio
      const radio = this.jedi.theme.getRadio()
      radio.setAttribute('value', value)
      radio.setAttribute('id', this.path + '.' + index)
      radioContainer.appendChild(radio)

      radio.addEventListener('change', () => {
        const radioValue = radio.value === 'true'
        this.setValue(radioValue)
      })

      // label
      const label = this.jedi.theme.getLabel(optionsLabels[index], {
        for: this.path + '.' + index
      })
      radioContainer.appendChild(label)

      fieldset.appendChild(radioContainer)
    })

    // description
    const description = this.jedi.theme.getDescriptionContainer(this.schema.description)
    this.container.appendChild(description)
  }

  refreshUI () {
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
