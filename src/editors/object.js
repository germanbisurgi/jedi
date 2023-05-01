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
    this.fieldsetBody = this.theme.getFieldsetBody()

    this.legend = this.theme.getLegend({
      textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    this.description = this.theme.getDescription({
      textContent: this.instance.schema.description()
    })

    this.propertiesToggle = this.theme.getPropertiesToggle({
      textContent: 'Properties',
      id: 'properties-slot-' + this.instance.path.replace('.', '-')
    })

    this.propertiesContainer = this.theme.getPropertiesActivators()

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

    this.addPropertyBtn.classList.add('jedi-object-add')

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

    this.container.appendChild(this.fieldset)
    this.fieldset.appendChild(this.legend)
    this.fieldset.appendChild(this.fieldsetBody)
    this.legend.appendChild(this.actionsSlot)
    this.fieldsetBody.appendChild(this.descriptionSlot)
    this.fieldsetBody.appendChild(this.propertiesSlot)
    this.fieldsetBody.appendChild(this.messagesSlot)
    this.fieldsetBody.appendChild(this.childrenSlot)

    if (isSet(this.instance.schema.description())) {
      this.descriptionSlot.appendChild(this.description)
    }

    if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
      this.actionsSlot.appendChild(this.propertiesToggle)
      this.propertiesSlot.appendChild(this.propertiesContainer)
      this.propertiesSlot.appendChild(this.addPropertyLabel)
      this.propertiesSlot.appendChild(this.addPropertyInput)
      this.propertiesSlot.appendChild(this.addPropertyBtn)
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

  refreshPropertiesSlot () {
    if (equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)) {
      while (this.propertiesContainer.firstChild) {
        this.propertiesContainer.removeChild(this.propertiesContainer.lastChild)
      }

      this.instance.children.forEach((child) => {
        const id = child.path + '-activator'

        const checkboxContainer = this.theme.getCheckboxContainer()

        const checkboxLabel = this.theme.getCheckboxLabel({
          for: id,
          textContent: isSet(child.schema.title()) ? child.schema.title() : child.getKey()
        })

        const checkbox = this.theme.getCheckbox({
          id: id
        })

        checkbox.checked = hasOwn(this.instance.getValue(), child.getKey())

        const isRequired = this.instance.isRequired(child.getKey())
        const isDependentRequired = this.instance.isDependentRequired(child.getKey())
        const disabled = this.disabled
        checkbox.disabled = isRequired || isDependentRequired || disabled

        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            child.activate()
          } else {
            child.deactivate()
          }
        })

        // appends
        this.propertiesContainer.appendChild(checkboxContainer)
        checkboxContainer.appendChild(checkbox)
        checkboxContainer.appendChild(checkboxLabel)
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
    this.refreshPropertiesSlot()
    this.refreshEditors()

    if (this.disabled) {
      this.propertiesToggle.setAttribute('disabled', 'disabled')
      this.addPropertyBtn.setAttribute('disabled', 'disabled')
      this.addPropertyInput.setAttribute('disabled', 'disabled')
    } else {
      this.propertiesToggle.removeAttribute('disabled')
      this.addPropertyBtn.removeAttribute('disabled')
      this.addPropertyInput.removeAttribute('disabled')
    }
  }
}

export default ObjectEditor
