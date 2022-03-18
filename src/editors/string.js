import Editor from '../editor'

class StringEditor extends Editor {
  build () {
    this.html = this.jedi.theme.getContainer()
    const label = this.jedi.theme.getLabel('string')
    const input = this.jedi.theme.getInput('text')
    this.html.appendChild(label)
    this.html.appendChild(input)

    this.input = input

    input.addEventListener('change', () => {
      this.value = input.value
    })
  }
}

export default StringEditor
