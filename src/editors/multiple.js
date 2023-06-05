import Editor from './editor'
import { pathToAttribute } from '../utils'

class MultipleEditor extends Editor {
  build () {
    this.control = this.theme.getMultipleControl({
      title: 'Options',
      srOnly: this.instance.schema.option('hideTitle'),
      id: pathToAttribute(this.instance.path),
      description: this.instance.schema.description(),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels
    })

    this.control.switcher.input.addEventListener('change', () => {
      const index = Number(this.control.switcher.input.value)
      this.instance.switchInstance(index)
    })

    this.container.appendChild(this.control.container)
  }

  refreshUI () {
    const oldInstance = this.instance.instances[this.instance.lastIndex]

    if (oldInstance.ui.container.parentNode) {
      this.control.childrenSlot.removeChild(oldInstance.ui.container)
    }

    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.container)

    this.control.switcher.input.value = this.instance.index

    const buttons = this.control.container.querySelectorAll('button')

    if (this.disabled) {
      this.instance.activeInstance.ui.disable()
      this.control.switcher.input.setAttribute('disabled', 'disabled')
      buttons.forEach((button) => {
        button.disabled = true
      })
    } else {
      this.instance.activeInstance.ui.enable()
      this.control.switcher.input.removeAttribute('disabled', 'disabled')
      buttons.forEach((button) => {
        button.disabled = false
      })
    }
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
