import Editor from './editor'
import { pathToAttribute } from '../utils'

class MultipleEditor extends Editor {
  build () {
    this.fieldset = this.theme.getFieldset()
    this.legend = this.theme.getLegend({
      textContent: 'Options'
    })
    this.fieldsetBody = this.theme.getFieldsetBody()

    this.switcher = this.theme.getSwitcher({
      values: this.instance.switcherOptionValues,
      titles: this.instance.switcherOptionsLabels,
      id: pathToAttribute(this.instance.path) + '-switcher',
      label: pathToAttribute(this.instance.path) + '-switcher',
      srOnly: true
    })

    this.switcher.container.classList.add('jedi-switcher')

    this.switcher.input.addEventListener('change', () => {
      const index = Number(this.switcher.input.value)
      this.instance.switchInstance(index)
    })

    // appends
    this.container.appendChild(this.fieldset)
    this.fieldset.appendChild(this.legend)
    this.fieldset.appendChild(this.fieldsetBody)
    this.legend.appendChild(this.actionsSlot)
    this.container.appendChild(this.messagesSlot)
    this.actionsSlot.appendChild(this.switcher.container)
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
      this.switcher.input.setAttribute('disabled', 'disabled')
      buttons.forEach((button) => {
        button.disabled = true
      })
    } else {
      this.instance.activeInstance.ui.enable()
      this.switcher.input.removeAttribute('disabled', 'disabled')
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
