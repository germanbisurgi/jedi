import Editor from '../editor'
import utils from '../utils'

class ObjectEditor extends Editor {
  build () {
    console.log('build', this.path, this.value, this.schema)

    // label
    if (!utils.getSchemaOption(this.schema, 'hideTitle')) {
      const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
      const label = this.jedi.theme.getLabel(labelText)
      this.container.appendChild(label)
    }

    // child editors
    if (utils.isSet(this.schema.properties)) {
      Object.keys(this.schema.properties).forEach((key) => {
        const schema = this.schema.properties[key]
        this.addChildEditor(schema, key)
      })
    }
  }

  addChildEditor (schema, key) {
    console.log('addChildEditor')

    const editor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: schema,
      path: this.path + '.' + key,
      parent: this
    })
    this.container.appendChild(editor.container)
    this.childEditors.push(editor)
    this.value[key] = editor.getValue()
  }

  removeChildEditor (key) {
    console.log('removeChildEditor', key)

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
    console.log('onChildEditorChange')

    const value = {}

    this.childEditors.forEach((childEditor) => {
      value[childEditor.getKey()] = childEditor.getValue()
    })

    this.setValue(value)
  }

  refreshUI () {
    console.log('refreshUI', this.getValue())

    const value = this.getValue()
    for (const key in value) {
      if (!Object.prototype.hasOwnProperty.call(value, key)) {
        continue
      }

      const childEditor = this.getChildEditor(key)

      if (childEditor) {
        childEditor.setValue(value[childEditor.getKey()], false)
      } else {
        const initialValue = value[key]

        const schema = {
          type: utils.getType(initialValue),
          default: initialValue
        }

        this.addChildEditor(schema, key)
      }
    }

    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const editor = this.childEditors[i]
      const key = editor.getKey()
      if (!utils.isSet(value[key])) {
        this.removeChildEditor(key)
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
