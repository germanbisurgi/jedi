import BooleanEditor from './boolean'

class BooleanCheckbox extends BooleanEditor {
  build () {
    // label
    const labelText = this.schema.title
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)

    // input
    this.input = this.jedi.theme.getInput({
      type: 'checkbox',
      id: this.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.setValue(this.input.checked)
    })
  }

  refreshUI () {
    this.input.checked = this.value
  }
}

export default BooleanCheckbox
