import Editor from '../editor'

class BooleanCheckbox extends Editor {
  build () {
    this.html = this.jedi.theme.getContainer()
    const label = this.jedi.theme.getLabel('boolean')
    this.html.appendChild(label)
    this.input = this.jedi.theme.getInput('checkbox')
    this.html.appendChild(this.input)

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
