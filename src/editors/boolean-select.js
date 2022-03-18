import Editor from '../editor'

class BooleanSelect extends Editor {
  build () {
    const label = this.jedi.theme.getLabel(this.schema.title)
    this.container.appendChild(label)

    const optionValues = [
      true,
      false
    ]
    const optionsLabels = [
      'true',
      'false'
    ]
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels)
    this.container.appendChild(this.input)

    this.input.addEventListener('change', () => {
      this.value = this.input.value
    })
  }

  sanitize (value) {
    return !!value
  }

  refreshUI () {
    this.input.value = this.value
  }
}

export default BooleanSelect
