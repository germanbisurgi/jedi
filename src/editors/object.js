import Editor from './editor'
import {
  equal,
  hasOwn,
  isObject,
  isSet,
  pathToAttribute
} from '../utils'

/**
 * Represents an ObjectEditor instance.
 * @extends Editor
 */
class ObjectEditor extends Editor {
  build () {
    this.control = this.theme.getObjectControl({
      title: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      id: pathToAttribute(this.instance.path),
      description: this.instance.schema.description(),
      editableProperties: equal(this.instance.jedi.options.editableProperties, true) || equal(this.instance.schema.option('editableProperties'), true)
    })

    this.control.addPropertyBtn.addEventListener('click', () => {
      const key = this.control.addPropertyControl.input.value

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
      this.control.addPropertyControl.input.value = ''
    })
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
      while (this.control.propertiesActivators.firstChild) {
        this.control.propertiesActivators.removeChild(this.control.propertiesActivators.lastChild)
      }

      this.instance.children.forEach((child) => {
        const id = pathToAttribute(child.path) + '-activator'

        const checboxControl = this.theme.getCheckboxControl({
          id: id,
          label: isSet(child.schema.title()) ? child.schema.title() : child.getKey(),
          srOnly: false
        })

        const checkbox = checboxControl.input

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

        this.control.propertiesActivators.appendChild(checboxControl.container)
      })
    }
  }

  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.lastChild)
    }

    this.instance.children.forEach((child) => {
      if (child.isActive) {
        this.control.childrenSlot.appendChild(child.ui.control.container)

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
      this.control.propertiesToggle.setAttribute('disabled', 'disabled')
      this.control.addPropertyBtn.setAttribute('disabled', 'disabled')
      this.control.addPropertyControl.input.setAttribute('disabled', 'disabled')
    } else {
      this.control.propertiesToggle.removeAttribute('disabled')
      this.control.addPropertyBtn.removeAttribute('disabled')
      this.control.addPropertyControl.input.removeAttribute('disabled')
    }
  }
}

export default ObjectEditor
