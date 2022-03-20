import BooleanEditor from './boolean'

class BooleanSelect extends BooleanEditor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // select
    const selectId = this.path
    const optionValues = ['', '1']
    const optionsLabels = ['false', 'true']
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, selectId)
    this.container.appendChild(this.input)

    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })
  }

  refreshUI () {
    this.input.value = this.value ? '1' : ''
  }
}

export default BooleanSelect
