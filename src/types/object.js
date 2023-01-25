import Instance from '../instance'
import Schema from '../schema'
import { equal, isSet, getType, isObject } from '../utils'
import ObjectEditor from '../editors/object'

class ObjectInstance extends Instance {
  setUI () {
    this.ui = new ObjectEditor(this)
  }

  prepare () {
    // child editors
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
        this.addChildEditor(schema, key)
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
          this.addChildEditor(schema, key)
        }
      }
    }
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

  addChildEditor (schema, key) {
    const editor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: new Schema(schema),
      path: this.path + '.' + key,
      parent: this
    })

    this.childEditors.push(editor)
    this.value[key] = editor.getValue()
  }

  deleteChildEditor (key) {
    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const editor = this.childEditors[i]
      if (editor.getKey() === key) {
        editor.destroy()
        this.childEditors.splice(i, 1)
      }
    }
  }

  onChildEditorChange () {
    const value = {}

    this.childEditors.forEach((childEditor) => {
      value[childEditor.getKey()] = childEditor.getValue()
    })

    this.setValue(value)
  }

  getChildEditor (key) {
    return this.childEditors.find((childEditor) => {
      return key === childEditor.getKey().split('.').pop()
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
      const editor = this.childEditors[i]
      const key = editor.getKey()
      if (!isSet(value[key])) {
        this.deleteChildEditor(key)
      }
    }

    for (const key in value) {
      if (!Object.hasOwn(value, key)) {
        continue
      }

      const childEditor = this.getChildEditor(key)

      // If a value has a already a child editor
      if (childEditor) {
        const oldValue = childEditor.getValue()
        const newValue = value[childEditor.getKey()]

        // update child value if the old value and the new value are different
        if (!equal(oldValue, newValue)) {
          childEditor.setValue(newValue, false)
        }
      } else {
        // create new child editor for the new value entry having the value as default
        const initialValue = value[key]
        const type = getType(initialValue)

        const schema = {
          type: type,
          default: initialValue
        }

        this.addChildEditor(schema, key)
      }
    }
  }

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ObjectInstance
