import Editor from '../editor'
import utils from '../utils'

class ObjectEditor extends Editor {
  build () {
    // label
    if (!utils.getSchemaOption(this.schema, 'hideTitle')) {
      const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
      const label = this.jedi.theme.getH3(labelText)
      this.container.appendChild(label)
    }

    // child editors
    if (utils.isSet(this.schema.properties)) {
      Object.keys(this.schema.properties).forEach((key) => {
        const schema = this.schema.properties[key]
        this.addChildEditor(schema, key)
      })
    }

    // addBtn
    if (this.jedi.options.addProperty) {
      const addBtn = this.jedi.theme.getButton('Add property')
      this.container.appendChild(addBtn)
      addBtn.addEventListener('click', () => {
        const randomKey = 'test-' + Math.ceil(Math.random() * 1000)
        this.value[randomKey] = undefined
        this.setValue(this.value)
      })
    }
  }

  setContainer () {
    this.container = this.jedi.theme.getObjectContainer()
  }

  addChildEditor (schema, key) {
    const editor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: schema,
      path: this.path + '.' + key,
      parent: this
    })

    // removeBtn
    const propertyEditorIsNotRequired = !editor.isRequired()
    const removePropertyOption = this.jedi.options.removeProperty
    if (propertyEditorIsNotRequired && removePropertyOption) {
      const removeBtn = this.jedi.theme.getButton('Remove property')
      editor.container.appendChild(removeBtn)
      removeBtn.addEventListener('click', () => {
        delete this.value[key]
        this.setValue(this.value)
      })
    }

    this.container.appendChild(editor.container)
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
  }

  onChildEditorChange () {
    const value = {}

    this.childEditors.forEach((childEditor) => {
      value[childEditor.getKey()] = childEditor.getValue()
    })

    this.setValue(value)
  }

  refreshUI () {
    const value = this.getValue()

    // remove any children that are not included in the value
    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const editor = this.childEditors[i]
      const key = editor.getKey()
      if (!utils.isSet(value[key])) {
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
        if (!utils.equal(oldValue, newValue)) {
          childEditor.setValue(newValue, false)
        }

        if (this.disabled) {
          childEditor.disable()
        } else {
          childEditor.enable()
        }
      } else {
        // create new child editor for the new value entry having the value as default
        const initialValue = value[key]
        const type = utils.getType(initialValue)

        const schema = {
          type: type,
          default: initialValue
        }

        this.addChildEditor(schema, key)
      }
    }
  }

  getChildEditor (key) {
    let output = false

    this.childEditors.forEach((childEditor) => {
      const childKey = childEditor.getKey().split('.').pop()
      if (key === childKey) {
        output = childEditor
      }
    })

    return output
  }

  sanitize (value) {
    if (utils.isObject(value)) {
      return value
    }

    return {}
  }

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ObjectEditor
