import Editor from '../editor'

class BooleanSelect extends Editor {
  build () {
    this.html = this.jedi.theme.getContainer()
    const label = this.jedi.theme.getLabel('boolean')
    this.html.appendChild(label)

    const optionValues = [
      true,
      false
    ]
    const optionsLabels = [
      'true',
      'false'
    ]
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels)
    this.html.appendChild(this.input)

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
