import Editor from '../editor'
import Schema from '../schema'
import { equal, isSet, getType, isObject } from '../utils'

class ObjectEditor extends Editor {
  build () {
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.childEditorsSlot)
    this.container.appendChild(this.actionsSlot)

    // child editors
    if (this.schema.properties()) {
      Object.keys(this.schema.properties()).forEach((key) => {
        const schema = this.schema.property(key)
        this.addChildEditor(schema, key)
      })
    }

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

  addChildEditor (schema, key) {
    const editor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: new Schema(schema),
      path: this.path + '.' + key,
      parent: this
    })

    // removeBtn
    const propertyEditorIsNotRequired = !editor.isRequired()
    const editableProperties = this.jedi.options.editableProperties || this.schema.option('editableProperties')

    if (propertyEditorIsNotRequired && editableProperties) {
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

  removeChildEditor (key) {
    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const editor = this.childEditors[i]
      if (editor.getKey() === key) {
        editor.destroy()
        this.childEditors.splice(i, 1)
      }
    }

    delete this.value[key]
    this.setValue(this.value)
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

  setContainer () {
    this.container = this.jedi.theme.getFieldset()

    // title
    if (!this.schema.option('hideTitle')) {
      this.container.appendChild(this.jedi.theme.getLegend({
        textContent: this.schema.title() ? this.schema.title() : this.getKey()
      }))

      // description
      if (this.schema.description()) {
        this.container.appendChild(this.jedi.theme.getDescription({
          textContent: this.schema.description()
        }))
      }
    }
  }

  onSetValue () {
    this.showValidationErrors()
    const value = this.getValue()

    // remove any children that are not included in the value
    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const editor = this.childEditors[i]
      const key = editor.getKey()
      if (!isSet(value[key])) {
        this.removeChildEditor(key)
      }
    }

    for (const key in value) {
      if (!Object.prototype.hasOwnProperty.call(value, key)) {
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
      if (!Object.prototype.hasOwnProperty.call(value, key)) {
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

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ObjectEditor
