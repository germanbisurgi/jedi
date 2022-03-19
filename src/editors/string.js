import Editor from '../editor'

class StringEditor extends Editor {
  build () {
    const label = this.jedi.theme.getLabel(this.schema.title)
    this.input = this.jedi.theme.getInput('text')
    this.container.appendChild(label)
    this.container.appendChild(this.input)

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
