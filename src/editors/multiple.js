import Editor from './editor'

class MultipleEditor extends Editor {
  build () {
    this.container.appendChild(this.messagesSlot)

    // switcher buttons
    this.switcherButtons = []
    this.switcher = this.theme.getBtnGroup()
    this.switcher.classList.add('jedi-switcher')

    this.instance.switcherOptionValues.forEach((value, index) => {
      // button
      const button = this.theme.getButton({
        textContent: this.instance.switcherOptionsLabels[index],
        value: index
      })

      button.addEventListener('click', () => {
        const index = Number(button.value)
        this.instance.switchEditor(index)
      })

      this.switcher.appendChild(button)
      this.switcherButtons.push(button)
    })

    this.container.appendChild(this.switcher)
  }

  setContainer () {
    this.container = this.theme.getFieldset()
    this.container.setAttribute('data-type', 'multiple')

    this.container.appendChild(this.theme.getLegend({
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: true
    }))
  }

  refreshUI () {
    const oldEditor = this.instance.editors[this.instance.lastIndex]

    if (oldEditor.ui.container.parentNode) {
      this.container.removeChild(oldEditor.ui.container)
    }

    this.container.appendChild(this.instance.activeEditor.ui.container)

    if (this.disabled) {
      this.instance.activeEditor.ui.disable()
      this.switcherButtons.forEach((button) => {
        button.disabled = true
      })
    } else {
      this.instance.activeEditor.ui.enable()
      this.switcherButtons.forEach((button) => {
        button.disabled = false
      })
    }

    this.switcherButtons.forEach((button) => {
      if ((Number(button.value) === Number(this.instance.index))) {
        button.classList.add(this.theme.getButtonActiveClass())
      } else {
        button.classList.remove(this.theme.getButtonActiveClass())
      }
    })
  }

  showValidationErrors () {
    super.showValidationErrors()
    this.instance.activeEditor.ui.showValidationErrors()
  }

  destroy () {
  }
}

export default MultipleEditor
