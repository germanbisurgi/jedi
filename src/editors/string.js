import Editor from '../editor'
import utils from '../utils'

class StringEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema)
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    const inputTypes = ['color', 'datetime-local', 'email', 'month', 'search', 'tel', 'text', 'time', 'url', 'week']
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
    return String(value)
  }

  refreshUI () {
    this.input.value = this.getValue()
  }
}

export default StringEditor
