import Editor from './editor'
import { isSet } from '../utils'

class ObjectEditor extends Editor {
  build () {
    this.setContainer()
    this.container.appendChild(this.propertiesSlot)
    this.container.appendChild(this.actionsSlot)
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.childEditorsSlot)

    if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
      const label = this.theme.getLabel({
        textContent: 'Property Name',
        for: 'jedi-add-property-input-' + this.instance.path
      })

      this.addPropertyInput = this.theme.getInput({
        type: 'text',
        id: 'jedi-add-property-input-' + this.instance.path
      })

      this.addPropertyBtn = this.theme.getButton({
        textContent: 'Add property'
      })

      this.addPropertyBtn.addEventListener('click', () => {
        const key = this.addPropertyInput.value

        // if not property name was given return
        if (key.length === 0) {
          return
        }

        // if property exist return
        if (isSet(this.instance.value[key])) {
          return
        }

        this.instance.createChildInstance({ type: 'any' }, key)
        this.instance.setValue(this.instance.value)
        this.addPropertyInput.value = ''
      })

      this.actionsSlot.appendChild(label)
      this.actionsSlot.appendChild(this.addPropertyInput)
      this.actionsSlot.appendChild(this.addPropertyBtn)
    }
  }

  refreshProperties () {
    if (this.instance.jedi.options.editableProperties || this.instance.schema.option('editableProperties')) {
      while (this.propertiesSlot.firstChild) {
        this.propertiesSlot.removeChild(this.propertiesSlot.lastChild)
      }

      this.instance.childEditors.forEach((childInstance) => {
        const id = childInstance.path + '-activator'

        const checkboxContainer = this.theme.getCheckboxContainer()

        const label = this.theme.getCheckboxLabel({
          for: id,
          textContent: childInstance.schema.title() ? childInstance.schema.title() : childInstance.getKey()
        })

        const checkbox = this.theme.getCheckbox({
          id: id
        })

        checkbox.checked = Object.hasOwn(this.instance.getValue(), childInstance.getKey())

        const isRequired = this.instance.isRequired(childInstance.getKey())
        const isDependentRequired = this.instance.isDependentRequired(childInstance.getKey())
        const disabled = this.disabled
        checkbox.disabled = isRequired || isDependentRequired || disabled

        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            childInstance.activate()
          } else {
            childInstance.deactivate()
          }
        })

        // appends
        this.propertiesSlot.appendChild(checkboxContainer)
        checkboxContainer.appendChild(checkbox)
        checkboxContainer.appendChild(label)
      })
    }
  }

  setContainer () {
    this.container = this.theme.getFieldset()

    // title
    this.container.appendChild(this.theme.getLegend({
      textContent: this.instance.schema.title() ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    }))

    // description
    if (this.instance.schema.description()) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  refreshEditors () {
    while (this.childEditorsSlot.firstChild) {
      this.childEditorsSlot.removeChild(this.childEditorsSlot.lastChild)
    }

    const value = this.instance.getValue()

    Object.keys(value).forEach((key) => {
      const childInstance = this.instance.getChildInstance(key)

      if (childInstance.isActive) {
        this.childEditorsSlot.appendChild(childInstance.ui.container)

        if (childInstance) {
          if (this.disabled) {
            childInstance.ui.disable()
          } else {
            childInstance.ui.enable()
          }
        }
      }
    })
  }

  refreshUI () {
    this.refreshProperties()
    this.refreshEditors()

    if (this.disabled) {
      this.addPropertyBtn.setAttribute('disabled', 'disabled')
      this.addPropertyInput.setAttribute('disabled', 'disabled')
    } else {
      this.addPropertyBtn.removeAttribute('disabled')
      this.addPropertyInput.removeAttribute('disabled')
    }
  }
}

export default ObjectEditor
