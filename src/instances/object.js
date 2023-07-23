import Instance from './instance'
import { different, isSet, notSet, getType, isObject, hasOwn } from '../utils'
import ObjectGridEditor from '../editors/object-grid'
import ObjectEditor from '../editors/object'
import ObjectNavEditor from '../editors/object-nav'

/**
 * Represents an ObjectInstance instance.
 * @extends Instance
 */
class ObjectInstance extends Instance {
  setUI () {
    this.ui = new ObjectEditor(this)

    if (this.schema.typeIs('object') && this.schema.formatIs('grid')) {
      this.ui = new ObjectGridEditor(this)
    } else if (this.schema.typeIs('object') && this.schema.formatIs('nav')) {
      this.ui = new ObjectNavEditor(this)
    } else {
      this.ui = new ObjectEditor(this)
    }
  }

  prepare () {
    if (isSet(this.schema.properties())) {
      Object.keys(this.schema.properties()).forEach((key) => {
        const schema = this.schema.properties()[key]
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
    return isSet(this.schema.required()) && this.schema.required().includes(property)
  }

  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired (property) {
    const dependentRequired = this.schema.dependentRequired()

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

  createChild (schema, key) {
    const instance = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + key,
      parent: this
    })

    this.children.push(instance)
    this.value[key] = instance.getValue()

    const isNotRequired = !this.isRequired(key)
    const shouldStartDeactivated = this.jedi.options.deactivateProperties || this.schema.option('deactivateProperties')

    if (isNotRequired && shouldStartDeactivated) {
      instance.deactivate()
    }

    return instance
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

    if (!isObject(value)) {
      return
    }

    Object.keys(value).forEach((key) => {
      const child = this.getChild(key)

      // If a value has a already a child instance
      if (child) {
        const oldValue = child.getValue()
        const newValue = value[child.getKey()]

        // update child value if the old value and the new value are different
        if (different(oldValue, newValue)) {
          child.setValue(newValue, false)
        }
      } else {
        // create new child instance for the new value entry having the value as default
        const initialValue = value[key]
        const type = getType(initialValue)

        const schema = {
          type: type,
          default: initialValue
        }

        this.createChild(schema, key)
      }
    })
  }
}

export default ObjectInstance
