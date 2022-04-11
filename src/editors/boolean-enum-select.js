import BooleanEditor from './boolean'

class BooleanEnumSelectEditor extends BooleanEditor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const optionValues = ['false', 'true']
    const optionsLabels = this.schema.enumTitles || optionValues
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path)
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      const value = this.input.value === 'true'
      this.setValue(value)
    })
  }

  refreshUI () {
    this.input.value = this.getValue() === true ? 'true' : 'false'
  }
}

export default BooleanEnumSelectEditor
