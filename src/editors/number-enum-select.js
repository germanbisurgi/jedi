import NumberEditor from './number'
import utils from '../utils'

class NumberEnumSelectEditor extends NumberEditor {
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
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path)
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })
  }
}

export default NumberEnumSelectEditor
