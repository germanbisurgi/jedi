import Instance from './instance.js'
import { different, isSet, notSet, isObject, hasOwn, clone, mergeDeep } from '../helpers/utils.js'
import EditorObjectGrid from '../editors/object-grid.js'
import EditorObject from '../editors/object.js'
import EditorObjectNav from '../editors/object-nav.js'
import {
  getSchemaDependentRequired,
  getSchemaFormat,
  getSchemaOption,
  getSchemaProperties,
  getSchemaRequired,
  getSchemaType
} from '../helpers/schema.js'

/**
 * Represents an InstanceObject instance.
 * @extends Instance
 */
class InstanceObject extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const schemaFormat = getSchemaFormat(this.schema)
    const schemaControl = this.schema['x-control']

    if (schemaType === 'object' && schemaFormat === 'grid') {
      this.ui = new EditorObjectGrid(this)
    } else if (schemaType === 'object' && schemaControl === 'nav') {
      this.ui = new EditorObjectNav(this)
    } else {
      this.ui = new EditorObject(this)
    }
  }

  prepare () {
    this.properties = {}
    const schemaProperties = getSchemaProperties(this.schema)

    if (isSet(schemaProperties)) {
      Object.keys(schemaProperties).forEach((key) => {
        const schema = schemaProperties[key]
        this.properties[key] = { schema }

        let musstCreateChild = true

        const optionsDeactivateNonRequired = this.jedi.options.deactivateNonRequired
        const deactivateNonRequired = getSchemaOption(this.schema, 'deactivateNonRequired')
        const schemaDeactivateNonRequired = getSchemaOption(schema, 'deactivateNonRequired')

        if (this.isNotRequired(key) && isSet(optionsDeactivateNonRequired) && optionsDeactivateNonRequired === true) {
          musstCreateChild = false
        }

        if (this.isNotRequired(key) && isSet(deactivateNonRequired) && deactivateNonRequired === true) {
          musstCreateChild = false
        }

        if (this.isNotRequired(key) && isSet(schemaDeactivateNonRequired) && schemaDeactivateNonRequired === true) {
          musstCreateChild = false
        }

        if (musstCreateChild) {
          this.createChild(schema, key)
        }
      })
    }

    this.refreshInstances()

    this.on('set-value', () => {
      this.refreshInstances()
    })
  }

  /**
   * Returns true if the property is required
   */
  isRequired (property) {
    const schemaRequired = getSchemaRequired(this.schema)

    return isSet(schemaRequired) && schemaRequired.includes(property)
  }

  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired (property) {
    const dependentRequired = getSchemaDependentRequired(this.schema)

    if (isSet(dependentRequired)) {
      let missingProperties = []

      Object.keys(dependentRequired).forEach((key) => {
        if (isSet(this.value[key])) {
          const requiredProperties = dependentRequired[key]

          missingProperties = requiredProperties.filter((property) => {
            return !hasOwn(this.value, property)
          })
        }
      })

      return missingProperties.includes(property)
    }

    return false
  }

  createChild (schema, key, value, activate = false) {
    const instance = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + key,
      parent: this,
      value: clone(value)
    })

    this.children.push(instance)
    this.value[key] = instance.getValue()

    const deactivateNonRequired = this.jedi.options.deactivateNonRequired || getSchemaOption(this.schema, 'deactivateNonRequired')

    if (this.isNotRequired(key) && isSet(deactivateNonRequired) && deactivateNonRequired === true && !activate) {
      instance.deactivate()
    }

    return instance
  }

  isNotRequired (property) {
    return !this.isRequired(property) && !this.isDependentRequired(property)
  }

  deleteChild (key) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      const instance = this.children[i]
      if (instance.getKey() === key) {
        instance.destroy()
        this.children.splice(i, 1)
        this.onChildChange()
      }
    }
  }

  getChild (key) {
    return this.children.find((instance) => {
      return key === instance.getKey().split(this.jedi.pathSeparator).pop()
    })
  }

  getPropertySchema (property) {
    let schema = {}

    if (this.schema.properties && this.schema.properties[property]) {
      schema = mergeDeep({}, this.schema.properties[property], clone(schema))
    }

    if (this.schema.additionalProperties) {
      schema = mergeDeep({}, this.schema.additionalProperties, clone(schema))
    }

    // if (this.schema.patternProperties) {
    //   schema = mergeDeep({}, this.schema.patternProperties, clone(schema))
    // }

    return schema
  }

  onChildChange () {
    const value = {}

    this.children.forEach((child) => {
      if (child.isActive) {
        value[child.getKey()] = child.getValue()
      }
    })

    this.value = value
    this.emit('change')
  }

  refreshInstances () {
    const value = this.getValue()

    if (!isObject(value)) {
      return
    }

    Object.keys(value).forEach((key) => {
      const child = this.getChild(key)

      // If a value has already a child instance
      if (child) {
        child.activate()
        const oldValue = child.getValue()
        const newValue = value[child.getKey()]

        // update child value if the old value and the new value are different
        if (different(oldValue, newValue)) {
          child.setValue(newValue, false)
        }
      } else {
        // create new child instance for the new value entry having the value as default
        const schema = this.getPropertySchema(key)

        this.createChild(schema, key, value[key], true)
      }
    })

    // remove any children that are not included in the value
    for (let i = this.children.length - 1; i >= 0; i--) {
      const instance = this.children[i]
      const key = instance.getKey()
      if (notSet(value[key])) {
        if (this.getChild(key)) {
          instance.deactivate()
        } else {
          this.deleteChild(key)
        }
      }
    }
  }
}

export default InstanceObject
