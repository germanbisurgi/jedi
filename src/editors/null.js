import Editor from '../editor'

class NullEditor extends Editor {
  build () {
    // description
    const description = this.jedi.theme.getDescriptionContainer(this.schema.description)
    this.container.appendChild(description)
  }

  sanitize (value) {
    return null
  }
}

export default NullEditor
