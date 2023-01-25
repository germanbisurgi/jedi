import Editor from './editor'

class StringEditor extends Editor {
  build () {
    this.container.appendChild(this.messagesSlot)

    // label
    const label = this.theme.getLabel({
      for: this.instance.path,
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    if (!this.instance.schema.formatIs('hidden')) {
      this.container.appendChild(label)
    }

    // input
    // todo file, range should be handled differently
    const inputTypes = ['hidden', 'color', 'date', 'datetime-local', 'email', 'number', 'month', 'password', 'search', 'time', 'tel', 'text', 'textarea', 'url', 'week']

    if (this.instance.schema.formatIs('textarea')) {
      this.input = this.theme.getTextarea({
        id: this.instance.path
      })
    } else {
      this.input = this.theme.getInput({
        type: inputTypes.includes(this.instance.schema.format()) ? this.instance.schema.format() : 'text',
        id: this.instance.path
      })
    }

    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  refreshUI () {
    this.input.value = this.instance.getValue()

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default StringEditor
