import NumberEditor from './number'
import utils from '../utils'

class NumberEnumSelectEditor extends NumberEditor {
  build () {
    this.container.appendChild(this.jedi.theme.getLabel({
      for: this.path,
      textContent: utils.getSchemaTitle(this.schema) || this.getKey()
    }))

    // input
    const optionValues = utils.getSchemaEnum(this.schema)
    const optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, {
      id: this.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })

    // description
    const description = this.jedi.theme.getDescriptionContainer(this.schema.description)
    this.container.appendChild(description)

    const firstOption = optionValues[0]

    if (firstOption) {
      this.setValue(firstOption, false)
    }
  }
}

export default NumberEnumSelectEditor
