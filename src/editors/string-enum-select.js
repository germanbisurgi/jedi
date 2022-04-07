import StringEditor from './string'

class StringEnumSelectEditor extends StringEditor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const optionValues = this.schema.enum
    const optionsLabels = this.schema.enum
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, this.path)
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })
  }
}

export default StringEnumSelectEditor
