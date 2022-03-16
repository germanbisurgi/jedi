import Editor from '../editor'

class StringEditor extends Editor {
  build () {
    this.html = this.theme.getContainer()
    const label = this.theme.getLabel('label text')
    const input = this.theme.getInput('text')
    this.html.appendChild(label)
    this.html.appendChild(input)
  }
}

export default StringEditor
