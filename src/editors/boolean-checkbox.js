import Editor from '../editor'

class BooleanCheckbox extends Editor {
  build () {
    const label = this.jedi.theme.getLabel(this.schema.title)
    this.container.appendChild(label)
    this.input = this.jedi.theme.getInput('checkbox')
    this.container.appendChild(this.input)

    this.input.addEventListener('change', () => {
      this.value = this.input.value
    })
  }

  sanitize (value) {
    return !!value
  }

  refreshUI () {
    this.input.checked = this.value
  }
}

export default BooleanCheckbox
