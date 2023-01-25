import Instance from '../instance'
import Schema from '../schema'
import { equal, isSet, getType, isObject } from '../utils'
import ObjectEditor from '../editors/object'

class ObjectInstance extends Instance {
  setUI () {
    this.ui = new ObjectEditor(this)
  }

  prepare () {
    if (this.schema.properties()) {
      for (const key in this.schema.properties()) {
        if (!Object.hasOwn(this.schema.properties(), key)) {
          continue
        }

        const showRequiredOnly = this.jedi.options.showRequiredOnly || this.schema.option('showRequiredOnly')
        const isNotRequired = !this.schema.required() || !this.schema.required().includes(key)

        if (showRequiredOnly && isNotRequired) {
          continue
        }

        const schema = this.schema.property(key)
        this.createChildInstance(schema, key)
      }
    }

    // Add dependent required properties
    if (this.schema.properties()) {
      for (const key in this.schema.properties()) {
        if (!Object.hasOwn(this.schema.properties(), key)) {
          continue
        }

        if (this.isDependentRequired(key)) {
          const schema = this.schema.property(key)
          this.createChildInstance(schema, key)
        }
      }
    }

    this.on('set-value', () => {
      this.onSetValue()
    })
  }

  /**
   * Returns true if the property is required
   */
  isRequired (property) {
    return this.schema.required() && this.schema.required().includes(property)
  }

  /**
   * Returns true if the property is dependent required
   */
  isDependentRequired (property) {
    const dependentRequired = this.schema.dependentRequired()

    if (dependentRequired) {
      let missingProperties = []

      Object.keys(dependentRequired).forEach((key) => {
        if (isSet(this.value[key])) {
          const requiredProperties = dependentRequired[key]

          missingProperties = requiredProperties.filter((property) => {
            return !Object.hasOwn(this.value, property)
          })
        }
      })

      return missingProperties.includes(property)
    }

    return false
  }

  createChildInstance (schema, key) {
    const instance = this.jedi.createEditor({
      jedi: this.jedi,
      schema: new Schema(schema),
      path: this.path + '.' + key,
      parent: this
    })

    this.childEditors.push(instance)
    this.value[key] = instance.getValue()
  }

  deleteChildInstance (key) {
    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const instance = this.childEditors[i]
      if (instance.getKey() === key) {
        instance.destroy()
        this.childEditors.splice(i, 1)
      }
    }
  }

  onChildEditorChange () {
    const value = {}

    this.childEditors.forEach((instance) => {
      value[instance.getKey()] = instance.getValue()
    })

    this.setValue(value)
  }

  getChildInstance (key) {
    return this.childEditors.find((instance) => {
      return key === instance.getKey().split('.').pop()
    })
  }

  sanitize (value) {
    if (isObject(value)) {
      return value
    }

    return {}
  }

  onSetValue () {
    const value = this.getValue()

    // remove any children that are not included in the value
    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const instance = this.childEditors[i]
      const key = instance.getKey()
      if (!isSet(value[key])) {
        this.deleteChildInstance(key)
      }
    }

    for (const key in value) {
      if (!Object.hasOwn(value, key)) {
        continue
      }

      const childInstance = this.getChildInstance(key)

      // If a value has a already a child instance
      if (childInstance) {
        const oldValue = childInstance.getValue()
        const newValue = value[childInstance.getKey()]

        // update child value if the old value and the new value are different
        if (!equal(oldValue, newValue)) {
          childInstance.setValue(newValue, false)
        }
      } else {
        // create new child instance for the new value entry having the value as default
        const initialValue = value[key]
        const type = getType(initialValue)

        const schema = {
          type: type,
          default: initialValue
        }

        this.createChildInstance(schema, key)
      }
    }
  }
}

export default ObjectInstance
