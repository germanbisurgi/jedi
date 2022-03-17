import Editor from '../editor'

class ObjectEditor extends Editor {
  build () {
    this.html = this.theme.getContainer()
    const label = this.theme.getLabel('object')
    const input = this.theme.getInput('text')
    this.html.appendChild(label)
    this.html.appendChild(input)
  }
}

export default ObjectEditor
