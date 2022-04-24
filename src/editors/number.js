import Editor from '../editor'
import utils from '../utils'

class NumberEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema)
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    this.input = this.jedi.theme.getInput({
      type: 'number',
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
