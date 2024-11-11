import Editor from './editor.js'
import {
  equal,
  hasOwn, isNumber,
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
      id: pathToAttribute(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      enablePropertiesToggle: enablePropertiesToggle,
      addProperty: addProperty,
      enableCollapseToggle: this.instance.jedi.options.enableCollapseToggle || getSchemaXOption(this.instance.schema, 'enableCollapseToggle'),
      startCollapsed: this.instance.jedi.options.startCollapsed || getSchemaXOption(this.instance.schema, 'startCollapsed')
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
      this.instance.setValue(this.instance.value)
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
      const schemaProperties = Object.keys(this.instance.properties)
      const childrenProperties = this.instance.children.map((child) => child.getKey())
      const properties = [...schemaProperties, ...childrenProperties]

      properties.forEach((property) => {
        const isRequired = this.instance.isRequired(property)
        const isDependentRequired = this.instance.isDependentRequired(property)
        const notRequired = !isRequired && !isDependentRequired
        const activatorInDom = this.propertyActivators[property]
        const ariaLive = this.control.ariaLive
        const schema = this.instance.getPropertySchema(property)

        const schemaTitle = getSchemaTitle(schema)
        const path = this.instance.path + this.instance.jedi.pathSeparator + property
        const id = pathToAttribute(path) + '-activator'
        const label = isSet(schemaTitle) ? schemaTitle : property

        if (notRequired && !activatorInDom) {
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

  /**
   * Sorts the children of the current instance based on their `propertyOrder` value in ascending order.
   * The sorting is done using the `propertyOrder` obtained from each child's schema, which should be a number.
   * If a child does not have a valid `propertyOrder` (i.e., the value is not a number), it will be placed after the child with a valid `propertyOrder`.
   * @returns {void} This function modifies the `children` array of the instance in place.
   */
  sortChildrenByPropertyOrder () {
    this.instance.children = this.instance.children.sort((a, b) => {
      const propertyOrderA = getSchemaXOption(a.schema, 'propertyOrder')
      const propertyOrderB = getSchemaXOption(b.schema, 'propertyOrder')

      const isValidNumberA = isNumber(propertyOrderA)
      const isValidNumberB = isNumber(propertyOrderB)

      if (!isValidNumberA && isValidNumberB) {
        return 1
      }

      if (isValidNumberA && !isValidNumberB) {
        return -1
      }

      if (propertyOrderA < propertyOrderB) {
        return -1
      }

      if (propertyOrderA > propertyOrderB) {
        return 1
      }

      return 0
    })
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
    this.sortChildrenByPropertyOrder()
    this.refreshInteractiveElements()
    this.refreshPropertiesSlot()
    this.refreshEditors()
  }
}

export default EditorObject
