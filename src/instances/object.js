import Instance from './instance'
import { different, isSet, notSet, isObject, hasOwn, clone } from '../helpers/utils'
import EditorObjectGrid from '../editors/object-grid'
import EditorObject from '../editors/object'
import EditorObjectNav from '../editors/object-nav'
import {
  getSchemaDependentRequired,
  getSchemaFormat, getSchemaOption,
  getSchemaProperties,
  getSchemaRequired,
  getSchemaType
} from '../helpers/schema'

/**
 * Represents an InstanceObject instance.
 * @extends Instance
 */
class InstanceObject extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const schemaFormat = getSchemaFormat(this.schema)

    this.ui = new EditorObject(this)

    if (schemaType === 'object' && schemaFormat === 'grid') {
      this.ui = new EditorObjectGrid(this)
    } else if (schemaType === 'object' && schemaFormat === 'nav') {
      this.ui = new EditorObjectNav(this)
    } else {
      this.ui = new EditorObject(this)
    }
  }

  prepare () {
    const schemaProperties = getSchemaProperties(this.schema)

    if (isSet(schemaProperties)) {
      Object.keys(schemaProperties).forEach((key) => {
        const schema = schemaProperties[key]
        this.createChild(schema, key)
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

  createChild (schema, key, value) {
    const instance = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + key,
      parent: this,
      value: clone(value)
    })

    this.children.push(instance)
    this.value[key] = instance.getValue()

    const deactivateNonRequired = getSchemaOption(this.schema, 'deactivateNonRequired')

    if (this.isNotRequired(key) && isSet(deactivateNonRequired) && deactivateNonRequired === true) {
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

  onChildChange () {
    const value = {}

    this.children.forEach((child) => {
      if (child.isActive) {
        value[child.getKey()] = child.getValue()
      }
    })

    this.setValue(value)
  }

  refreshInstances () {
    const value = this.getValue()

    if (!isObject(value)) {
      return
    }

    Object.keys(value).forEach((key) => {
      const child = this.getChild(key)

      // If a value has a already a child instance
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
        this.createChild({}, key, value[key])
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
