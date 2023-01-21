import Editor from '../editor'
import Schema from '../schema'
import { equal, isSet, getType, isObject } from '../utils'

class ObjectEditor extends Editor {
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

  build () {
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.childEditorsSlot)
    this.container.appendChild(this.actionsSlot)

    // addBtn
    if (this.jedi.options.editableProperties || this.schema.option('editableProperties')) {
      const label = this.jedi.theme.getLabel({
        textContent: 'Property Name',
        for: 'jedi-add-property-input-' + this.path
      })

      this.container.appendChild(label)

      const input = this.jedi.theme.getInput({
        type: 'text',
        id: 'jedi-add-property-input-' + this.path
      })

      this.container.appendChild(input)

      const addBtn = this.jedi.theme.getButton({
        textContent: 'Add property'
      })

      addBtn.addEventListener('click', () => {
        const key = input.value

        // if not property name was given return
        if (key.length === 0) {
          return
        }

        // if property exist return
        if (isSet(this.value[key])) {
          return
        }

        this.addChildEditor({ type: 'any' }, key)
        this.setValue(this.value)
        input.value = ''
      })

      this.container.appendChild(addBtn)
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

    // removeBtn
    const notRequired = !this.isRequired(key)
    const notDependentRequired = !this.isDependentRequired(key)
    const editableProperties = this.jedi.options.editableProperties || this.schema.option('editableProperties')

    if (notRequired && notDependentRequired && editableProperties) {
      const removeBtn = this.jedi.theme.getButton({
        textContent: 'Remove property'
      })
      editor.container.appendChild(removeBtn)
      removeBtn.addEventListener('click', () => {
        delete this.value[key]
        this.setValue(this.value)
      })
    }

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
    this.showValidationErrors()
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

  refreshUI () {
    const value = this.getValue()

    for (const key in value) {
      if (!Object.hasOwn(value, key)) {
        continue
      }

      const childEditor = this.getChildEditor(key)

      this.childEditorsSlot.appendChild(childEditor.container)

      if (childEditor) {
        if (this.disabled) {
          childEditor.disable()
        } else {
          childEditor.enable()
        }
      }
    }
  }

  setContainer () {
    this.container = this.jedi.theme.getFieldset()

    // title
    this.container.appendChild(this.jedi.theme.getLegend({
      textContent: this.schema.title() ? this.schema.title() : this.getKey(),
      srOnly: this.schema.option('hideTitle')
    }))

    // description
    if (this.schema.description()) {
      this.container.appendChild(this.jedi.theme.getDescription({
        textContent: this.schema.description()
      }))
    }
  }

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ObjectEditor
