import Editor from './editor'

class MultipleEditor extends Editor {
  build () {
    this.fieldset = this.theme.getFieldset()
    this.legend = this.theme.getLegend({
      textContent: 'Options'
    })
    this.fieldsetBody = this.theme.getFieldsetBody()

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
        this.instance.switchInstance(index)
      })

      this.switcher.appendChild(button)
      this.switcherButtons.push(button)
    })

    // appends
    this.container.appendChild(this.fieldset)
    this.fieldset.appendChild(this.legend)
    this.fieldset.appendChild(this.fieldsetBody)
    this.legend.appendChild(this.actionsSlot)
    this.container.appendChild(this.messagesSlot)
    this.actionsSlot.appendChild(this.switcher)
  }

  refreshUI () {
    const oldInstance = this.instance.instances[this.instance.lastIndex]

    if (oldInstance.ui.container.parentNode) {
      this.fieldsetBody.removeChild(oldInstance.ui.container)
    }

    this.fieldsetBody.appendChild(this.instance.activeInstance.ui.container)

    const buttons = this.container.querySelectorAll('button')

    if (this.disabled) {
      this.instance.activeInstance.ui.disable()
      buttons.forEach((button) => {
        button.disabled = true
      })
    } else {
      this.instance.activeInstance.ui.enable()
      buttons.forEach((button) => {
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
    this.instance.activeInstance.ui.showValidationErrors()
  }

  getInvalidFeedback (message) {
    return this.theme.getAlert({
      message: message
    })
  }
}

export default MultipleEditor
