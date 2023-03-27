import Editor from './editor'
import {
  equal,
  hasOwn,
  isObject,
  isSet
} from '../utils'

class ObjectEditor extends Editor {
  build () {
    this.fieldset = this.theme.getFieldset()

    this.legend = this.theme.getLegend({
      textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    this.description = this.theme.getDescription({
      textContent: this.instance.schema.description()
    })

    this.dropdown = this.theme.getDropdown()
    this.dropdownToggle = this.theme.getDropdownToggle()
    this.dropdownMenu = this.theme.getDropdownMenu()

    this.addPropertyLabel = this.theme.getLabel({
      textContent: 'Property',
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

      const propertyNameEmpty = key.length === 0

      if (propertyNameEmpty) {
        return
      }

      const propertyExist = isSet(this.instance.value[key])

      if (propertyExist) {
        return
      }

      let schema = { type: 'any' }

      const additionalProperties = this.instance.schema.additionalProperties()

      if (isSet(additionalProperties)) {
        schema = additionalProperties
      }

      const child = this.instance.createChild(schema, key)
      child.activate()
      this.instance.setValue(this.instance.value)
      this.addPropertyInput.value = ''
    })

    this.fieldset.appendChild(this.legend)
    this.fieldset.appendChild(this.toolbarSlot)
    this.fieldset.appendChild(this.messagesSlot)
    this.fieldset.appendChild(this.actionsSlot)
    this.fieldset.appendChild(this.childrenSlot)
    this.container.appendChild(this.fieldset)

    if (isSet(this.instance.schema.description())) {
      this.fieldset.appendChild(this.description)
    }

    if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
      this.toolbarSlot.appendChild(this.dropdown)
      this.dropdown.appendChild(this.dropdownToggle)
      this.dropdown.appendChild(this.dropdownMenu)
      this.dropdownMenu.appendChild(this.activatorsSlot)
      this.dropdownMenu.appendChild(this.addPropertyLabel)
      this.dropdownMenu.appendChild(this.addPropertyInput)
      this.dropdownMenu.appendChild(this.addPropertyBtn)
    }
  }

  sanitize (value) {
    if (isObject(value)) {
      return value
    }

    return {}
  }

  getInvalidFeedback (message) {
    return this.theme.getAlert({
      message: message
    })
  }

  refreshActivators () {
    if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
      while (this.activatorsSlot.firstChild) {
        this.activatorsSlot.removeChild(this.activatorsSlot.lastChild)
      }

      this.instance.children.forEach((child) => {
        const activatorId = child.path + '-activator'

        const activatorContainer = this.theme.getCheckboxContainer()

        const activatorLabel = this.theme.getCheckboxLabel({
          for: activatorId,
          textContent: isSet(child.schema.title()) ? child.schema.title() : child.getKey()
        })

        const activatorInput = this.theme.getCheckbox({
          id: activatorId
        })

        activatorInput.checked = hasOwn(this.instance.getValue(), child.getKey())

        const isRequired = this.instance.isRequired(child.getKey())
        const isDependentRequired = this.instance.isDependentRequired(child.getKey())
        const disabled = this.disabled
        activatorInput.disabled = isRequired || isDependentRequired || disabled

        activatorInput.addEventListener('change', () => {
          if (activatorInput.checked) {
            child.activate()
          } else {
            child.deactivate()
          }
        })

        // appends
        this.activatorsSlot.appendChild(activatorContainer)
        activatorContainer.appendChild(activatorInput)
        activatorContainer.appendChild(activatorLabel)
      })
    }
  }

  refreshEditors () {
    while (this.childrenSlot.firstChild) {
      this.childrenSlot.removeChild(this.childrenSlot.lastChild)
    }

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        this.childrenSlot.appendChild(child.ui.container)

        if (this.disabled) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      }
    })
  }

  refreshUI () {
    this.refreshActivators()
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
