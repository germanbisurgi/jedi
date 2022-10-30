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
      const radio = this.jedi.theme.getRadio()
      radio.setAttribute('value', value)
      radio.setAttribute('id', this.path + '.' + index)

      radio.addEventListener('change', () => {
        this.setValue(radio.value)
      })

      fieldset.appendChild(radio)

      const label = this.jedi.theme.getLabel(optionsLabels[index], {
        for: this.path + '.' + index
      })

      fieldset.appendChild(label)
    })

    // description
    const description = this.jedi.theme.getDescriptionContainer(this.schema.description)
    this.container.appendChild(description)
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
