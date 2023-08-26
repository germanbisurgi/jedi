import Editor from './editor'
import { pathToAttribute } from '../helpers/utils'
import { getSchemaDescription, getSchemaOption } from '../helpers/schema'

/**
 * Represents an EditorMultiple instance.
 * @extends Editor
 */
class EditorMultiple extends Editor {
  build () {
    this.control = this.theme.getMultipleControl({
      title: 'Options',
      srOnly: getSchemaOption(this.instance.schema, 'hideTitle'),
      id: pathToAttribute(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels
    })
  }

  addEventListeners () {
    this.control.switcher.input.addEventListener('change', () => {
      const index = Number(this.control.switcher.input.value)
      this.instance.switchInstance(index)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.childrenSlot.innerHTML = ''
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container)
    this.control.switcher.input.value = this.instance.index

    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable()
    } else {
      this.instance.activeInstance.ui.enable()
    }
  }

  // showValidationErrors (errors) {
  //   const multipleErrors = errors.filter((error) => error.path === this.path)
  //   const activeInstanceErrors = errors.filter((error) => error.path !== this.path)
  //   super.showValidationErrors(multipleErrors)
  //   this.instance.activeInstance.ui.showValidationErrors(activeInstanceErrors)
  // }

  getInvalidFeedback (message) {
    return this.theme.getAlert({
      message: message
    })
  }
}

export default EditorMultiple
