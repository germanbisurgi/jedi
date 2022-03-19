import BooleanEditor from './boolean'

class BooleanCheckbox extends BooleanEditor {
  build () {
    const label = this.jedi.theme.getLabel(this.schema.title)
    this.container.appendChild(label)
    this.input = this.jedi.theme.getInput('checkbox')
    this.container.appendChild(this.input)

    this.input.addEventListener('change', () => {
      this.setValue(this.input.checked)
    })
  }

  refreshUI () {
    this.input.checked = this.value
  }
}

export default BooleanCheckbox
