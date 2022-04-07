import NumberEditor from './number'

class NumberEnumSelectEditor extends NumberEditor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const optionValues = this.schema.enum
    const optionsLabels = this.schema.enumTitles || this.schema.enum
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path)
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })
  }
}

export default NumberEnumSelectEditor
