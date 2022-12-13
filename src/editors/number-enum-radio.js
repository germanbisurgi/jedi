import NumberEditor from './number'
import utils from '../utils'

class NumberEnumRadioEditor extends NumberEditor {
  build () {
    // input
    const legendText = utils.getSchemaTitle(this.schema) || this.getKey()
    const optionValues = utils.getSchemaEnum(this.schema)
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
        this.setValue(radio.value)
      })

      // label
      radioContainer.appendChild(this.jedi.theme.getLabel({
        for: this.path + '.' + index,
        textContent: optionsLabels[index]
      }))

      fieldset.appendChild(radioContainer)
    })

    // description
    const description = this.jedi.theme.getDescriptionContainer(this.schema.description)
    this.container.appendChild(description)

    const firstOption = optionValues[0]

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
