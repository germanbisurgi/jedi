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
    this.propertyActivators = {}
    const schemaOptions = this.instance.schema.options || {}
    let addProperty = true
    const additionalProperties = getSchemaAdditionalProperties(this.instance.schema)

    if (isSet(additionalProperties) && additionalProperties === false) {
      addProperty = false
    }

    let editableProperties = false

    if (isSet(this.instance.jedi.options.editableProperties)) {
      editableProperties = this.instance.jedi.options.editableProperties
    }

    if (isSet(schemaOptions.editableProperties)) {
      editableProperties = schemaOptions.editableProperties
    }

    this.control = this.theme.getObjectControl({
      title: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      srOnly: getSchemaOption(this.instance.schema, 'hideTitle'),
      id: pathToAttribute(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      editableProperties: editableProperties,
      addProperty: addProperty
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

      let schema = {}

      const schemaAdditionalProperties = getSchemaAdditionalProperties(this.instance.schema)

      if (isSet(schemaAdditionalProperties)) {
        schema = schemaAdditionalProperties
      }

      const child = this.instance.createChild(schema, key)
      child.activate()
      this.instance.setValue(this.instance.value)
      this.control.addPropertyControl.input.value = ''

      const ariaLive = this.control.ariaLive
      ariaLive.innerHTML = ''
      const schemaTitle = getSchemaTitle(child.schema)
      const label = isSet(schemaTitle) ? schemaTitle : key
      const ariaLiveMessage = this.theme.getAriaLiveMessage()
      ariaLiveMessage.textContent = label + ' field was added to the form'
      ariaLive.appendChild(ariaLiveMessage)
    })
  }

  sanitize (value) {
    if (isObject(value)) {
      return value
    }

    return {}
  }

  getInvalidFeedback (config) {
    return this.theme.getAlert(config)
  }

  refreshPropertiesSlot () {
    const schemaOptionEditableProperties = getSchemaOption(this.instance.schema, 'editableProperties')

    if (equal(this.instance.jedi.options.editableProperties, true) || equal(schemaOptionEditableProperties, true)) {
      this.instance.children.forEach((child) => {
        const childKey = child.getKey()
        const isRequired = this.instance.isRequired(childKey)
        const isDependentRequired = this.instance.isDependentRequired(childKey)
        const notRequired = !isRequired && !isDependentRequired
        const activatorInDom = this.propertyActivators[childKey]
        const ariaLive = this.control.ariaLive
        const schemaTitle = getSchemaTitle(child.schema)
        const id = pathToAttribute(child.path) + '-activator'
        const label = isSet(schemaTitle) ? schemaTitle : childKey

        if (notRequired && !activatorInDom) {
          const checkboxControl = this.theme.getCheckboxControl({
            id: id,
            label: label,
            srOnly: false
          })

          const checkbox = checkboxControl.input
          this.propertyActivators[childKey] = checkbox

          checkbox.addEventListener('change', () => {
            ariaLive.innerHTML = ''
            const ariaLiveMessage = this.theme.getAriaLiveMessage()

            if (checkbox.checked) {
              child.activate()
              ariaLiveMessage.textContent = label + ' field was added to the form'
              ariaLive.appendChild(ariaLiveMessage)
            } else {
              child.deactivate()
              ariaLiveMessage.textContent = label + ' field was removed from the form'
              ariaLive.appendChild(ariaLiveMessage)
            }
          })

          this.control.propertiesActivators.appendChild(checkboxControl.container)
        }

        const checkbox = this.propertyActivators[childKey]
        if (checkbox) {
          checkbox.disabled = this.disabled
          checkbox.checked = hasOwn(this.instance.getValue(), childKey)
        }
      })
    }
  }

  refreshEditors () {
    this.instance.children.forEach((child) => {
      if (child.isActive) {
        if (child.ui.control.container.parentNode === null) {
          this.control.childrenSlot.appendChild(child.ui.control.container)
        }

        if (this.disabled || this.instance.isReadOnly()) {
          child.ui.disable()
        } else {
          child.ui.enable()
        }
      } else {
        if (child.ui.control.container.parentNode) {
          child.ui.control.container.parentNode.removeChild(child.ui.control.container)
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
