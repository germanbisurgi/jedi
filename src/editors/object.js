import Editor from './editor'
import {
  equal,
  hasOwn,
  isObject,
  isSet,
  pathToAttribute
} from '../helpers/utils'
import {
  getSchemaAdditionalProperties,
  getSchemaDescription,
  getSchemaOption,
  getSchemaTitle
} from '../helpers/schema'

/**
 * Represents an EditorObject instance.
 * @extends Editor
 */
class EditorObject extends Editor {
  build () {
    this.control = this.theme.getObjectControl({
      title: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      srOnly: getSchemaOption(this.instance.schema, 'hideTitle'),
      id: pathToAttribute(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      editableProperties: equal(this.instance.jedi.options.editableProperties, true) || equal(getSchemaOption(this.instance.schema, 'editableProperties'), true)
    })
  }

  addEventListeners () {
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

      const schemaAdditionalProperties = getSchemaAdditionalProperties(schema)

      if (isSet(schemaAdditionalProperties)) {
        schema = schemaAdditionalProperties
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
    const schemaOptionEditableProperties = getSchemaOption(this.instance.schema, 'editableProperties')

    if (equal(this.instance.jedi.options.editableProperties, true) || equal(schemaOptionEditableProperties, true)) {
      while (this.control.propertiesActivators.firstChild) {
        this.control.propertiesActivators.removeChild(this.control.propertiesActivators.lastChild)
      }

      this.instance.children.forEach((child) => {
        const isRequired = this.instance.isRequired(child.getKey())
        const isDependentRequired = this.instance.isDependentRequired(child.getKey())
        const notRequired = !isRequired && !isDependentRequired

        if (notRequired) {
          const schemaTitle = getSchemaTitle(child.schema)
          const id = pathToAttribute(child.path) + '-activator'

          const checkboxControl = this.theme.getCheckboxControl({
            id: id,
            label: isSet(schemaTitle) ? schemaTitle : child.getKey(),
            srOnly: false
          })

          const checkbox = checkboxControl.input

          checkbox.disabled = this.disabled
          checkbox.checked = hasOwn(this.instance.getValue(), child.getKey())

          checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
              child.activate()
            } else {
              child.deactivate()
            }
          })

          this.control.propertiesActivators.appendChild(checkboxControl.container)
        }
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

        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      }
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.refreshPropertiesSlot()
    this.refreshEditors()
  }
}

export default EditorObject
