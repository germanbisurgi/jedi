import Editor from '../editor'

class StringEditor extends Editor {
  build () {
    this.container = this.theme.getContainer()
    const label = this.theme.getLabel('label text')
    const input = this.theme.getInput('text')
    this.container.appendChild(label)
    this.container.appendChild(input)
    console.log(this.container)
  }
}

export default StringEditor
