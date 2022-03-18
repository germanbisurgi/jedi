import Editor from '../editor'

class StringEditor extends Editor {
  constructor (config) {
    super(config)
    this.value = ''
  }

  build () {
    const label = this.jedi.theme.getLabel(this.schema.title)
    this.input = this.jedi.theme.getInput('text')
    this.container.appendChild(label)
    this.container.appendChild(this.input)

    this.input.addEventListener('change', () => {
      this.value = this.input.value
    })
  }

  sanitize (value) {
    return String(value)
  }
}

export default StringEditor
