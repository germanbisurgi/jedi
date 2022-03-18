import BooleanEditor from './boolean'

class BooleanSelect extends BooleanEditor {
  build () {
    const label = this.jedi.theme.getLabel(this.schema.title)
    this.container.appendChild(label)
    const optionValues = ['', '1']
    const optionsLabels = ['false', 'true']
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels)
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
