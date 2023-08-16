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
    const schema = this.instance.schema
    const schemaTitle = getSchemaTitle(schema)
    const schemaDescription = getSchemaDescription(schema)
    const schemaAdditionalProperties = getSchemaAdditionalProperties(schema)
    const hideTitle = getSchemaOption(schema, 'hideTitle')
    const editableProperties = getSchemaOption(schema, 'editableProperties')

    this.control = this.theme.getObjectControl({
      title: isSet(schemaTitle) ? schemaTitle : this.instance.getKey(),
      srOnly: hideTitle,
      id: pathToAttribute(this.instance.path),
      description: schemaDescription,
      editableProperties: equal(this.instance.jedi.options.editableProperties, true) || equal(editableProperties, true)
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
        const schemaTitle = getSchemaTitle(child.schema)
        const id = pathToAttribute(child.path) + '-activator'

        const checkboxControl = this.theme.getCheckboxControl({
          id: id,
          label: isSet(schemaTitle) ? schemaTitle : child.getKey(),
          srOnly: false
        })

        const checkbox = checkboxControl.input

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

        this.control.propertiesActivators.appendChild(checkboxControl.container)
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
