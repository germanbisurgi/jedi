import Editor from './editor'

class NullEditor extends Editor {
  build () {
    this.container.appendChild(this.messagesSlot)

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  sanitize () {
    return null
  }
}

export default NullEditor
