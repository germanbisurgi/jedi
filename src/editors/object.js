import Editor from './editor.js'
import {
  equal,
  hasOwn,
  isObject,
  isSet,
  pathToAttribute
} from '../helpers/utils.js'
import {
  getSchemaAdditionalProperties,
  getSchemaDescription,
  getSchemaTitle, getSchemaType,
  getSchemaXOption
} from '../helpers/schema.js'

/**
 * Represents an EditorObject instance.
 * @extends Editor
 */
class EditorObject extends Editor {
  static resolves (schema) {
    return getSchemaType(schema) === 'object'
  }

  build () {
    this.propertyActivators = {}
    const schemaOptions = this.instance.schema.options || {}
    let addProperty = true
    const additionalProperties = getSchemaAdditionalProperties(this.instance.schema)

    if (isSet(additionalProperties) && additionalProperties === false) {
      addProperty = false
    }

    let enablePropertiesToggle = false

    if (isSet(this.instance.jedi.options.enablePropertiesToggle)) {
      enablePropertiesToggle = this.instance.jedi.options.enablePropertiesToggle
    }

    if (isSet(schemaOptions.enablePropertiesToggle)) {
      enablePropertiesToggle = schemaOptions.enablePropertiesToggle
    }

    this.control = this.theme.getObjectControl({
      title: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      id: this.getIdFromPath(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      enablePropertiesToggle: enablePropertiesToggle,
      addProperty: addProperty,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || getSchemaXOption(this.instance.schema, 'enableCollapseToggle'),
      startCollapsed: this.instance.jedi.options.startCollapsed || getSchemaXOption(this.instance.schema, 'startCollapsed'),
      readOnly: this.instance.isReadOnly(),
      info: getSchemaXOption(this.instance.schema, 'info')
    })
  }

  addEventListeners () {
    this.control.addPropertyBtn.addEventListener('click', () => {
      const propertyName = this.control.addPropertyControl.input.value.split(' ').join('')

      const propertyNameEmpty = propertyName.length === 0

      if (propertyNameEmpty) {
        return
      }

      const propertyExist = isSet(this.instance.value[propertyName])

      if (propertyExist) {
        return
      }

      const schema = this.instance.getPropertySchema(propertyName)

      const child = this.instance.createChild(schema, propertyName)
      child.activate()
      this.instance.setValue(this.instance.value, true, 'editor')
      this.control.addPropertyControl.input.value = ''

      const ariaLive = this.control.ariaLive
      ariaLive.innerHTML = ''
      const schemaTitle = getSchemaTitle(child.schema)
      const label = isSet(schemaTitle) ? schemaTitle : propertyName
      const ariaLiveMessage = this.theme.getAriaLiveMessage()
      ariaLiveMessage.textContent = label + ' field was added to the form'
      ariaLive.appendChild(ariaLiveMessage)

      // keeps dialog open
      this.control.propertiesContainer.close()
      this.control.propertiesContainer.showModal()
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
    const schemaOptionEnablePropertiesToggle = getSchemaXOption(this.instance.schema, 'enablePropertiesToggle')

    if (equal(this.instance.jedi.options.enablePropertiesToggle, true) || equal(schemaOptionEnablePropertiesToggle, true)) {
      // todo: delete "this.properties and this.instance.properties"
      const properties = this.instance.children.map((child) => child.getKey())

      while (this.control.propertiesActivators.firstChild) {
        this.control.propertiesActivators.removeChild(this.control.propertiesActivators.firstChild)
      }

      properties.forEach((property) => {
        const isRequired = this.instance.isRequired(property)
        const isDependentRequired = this.instance.isDependentRequired(property)
        const notRequired = !isRequired && !isDependentRequired
        const ariaLive = this.control.ariaLive
        const schema = this.instance.getPropertySchema(property)
        const schemaTitle = getSchemaTitle(schema)
        const path = this.instance.path + this.instance.jedi.pathSeparator + property
        const id = pathToAttribute(path) + '-activator'
        const label = isSet(schemaTitle) ? schemaTitle : property

        if (notRequired) {
          const checkboxControl = this.theme.getCheckboxControl({
            id: id,
            label: label,
            titleHidden: false
          })

          const checkbox = checkboxControl.input
          this.propertyActivators[property] = checkbox

          checkbox.addEventListener('change', () => {
            ariaLive.innerHTML = ''
            const ariaLiveMessage = this.theme.getAriaLiveMessage()

            if (checkbox.checked) {
              const child = this.instance.getChild(property)

              if (!child) {
                this.instance.createChild(schema, property)
              }

              this.instance.getChild(property).activate()
              ariaLiveMessage.textContent = label + ' field was added to the form'
              ariaLive.appendChild(ariaLiveMessage)
            } else {
              this.instance.getChild(property).deactivate()
              ariaLiveMessage.textContent = label + ' field was removed from the form'
              ariaLive.appendChild(ariaLiveMessage)
            }

            // keeps dialog open
            this.control.propertiesContainer.close()
            this.control.propertiesContainer.showModal()
          })

          this.control.propertiesActivators.appendChild(checkboxControl.container)
        }

        const checkbox = this.propertyActivators[property]

        if (checkbox) {
          checkbox.disabled = this.disabled
          checkbox.checked = hasOwn(this.instance.getValue(), property)
        }
      })
    }
  }

  refreshEditors () {
    while (this.control.childrenSlot.firstChild) {
      this.control.childrenSlot.removeChild(this.control.childrenSlot.firstChild)
    }

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
    this.refreshDisabledState()
    this.refreshPropertiesSlot()
    this.refreshEditors()
  }
}

export default EditorObject
