import Editor from '../editor'

class NumberEditor extends Editor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const inputTypes = ['number', 'range']
    this.input = this.jedi.theme.getInput({
      type: inputTypes.includes(this.schema.format) ? this.schema.format : 'text',
      id: this.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.value)
    })
  }

  sanitize (value) {
    return Number(value)
  }

  refreshUI () {
    this.input.value = this.getValue()
  }
}

export default NumberEditor
