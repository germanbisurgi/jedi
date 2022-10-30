import Editor from '../editor'
import utils from '../utils'

class BooleanEditor extends Editor {
  build () {
    // checkbox container
    const checkboxContainer = this.jedi.theme.getCheckboxContainer()

    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getCheckboxLabel(labelText, this.path)

    // input
    this.input = this.jedi.theme.getCheckbox({
      id: this.path
    })

    // appends
    this.container.appendChild(checkboxContainer)
    checkboxContainer.appendChild(this.input)
    checkboxContainer.appendChild(label)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.checked)
    })

    // description
    const description = this.jedi.theme.getDescriptionContainer(this.schema.description)
    this.container.appendChild(description)
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
