import Editor from '../editor'
import utils from '../utils'

class BooleanEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })

    // input
    this.input = this.jedi.theme.getCheckbox({
      id: this.path
    })

    // appends
    this.container.appendChild(this.input)
    this.container.appendChild(label)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.checked)
    })
  }

  sanitize (value) {
    return Boolean(value)
  }

  refreshUI () {
    this.input.checked = this.getValue()

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEditor
