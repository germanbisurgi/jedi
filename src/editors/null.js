import Editor from '../editor'

class NullEditor extends Editor {
  build () {
    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }
  }

  sanitize (value) {
    return null
  }
}

export default NullEditor
