import Editor from '../editor'
import utils from '../utils'

class ObjectEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getLabel(labelText)
    this.container.appendChild(label)

    // child editors
    if (utils.isSet(this.schema.properties)) {
      Object.keys(this.schema.properties).forEach((key) => {
        const schema = this.schema.properties[key]
        this.addChildEditor(schema, key)
      })
    }
  }

  addChildEditor (schema, key) {
    const editor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: schema,
      path: this.path + '.' + key,
      parent: this
    })
    this.container.appendChild(editor.container)
    this.childEditors.push(editor)
  }

  onChildEditorChange () {
    const value = {}

    this.childEditors.forEach((childEditor) => {
      value[childEditor.getKey()] = childEditor.getValue()
    })

    this.setValue(value)
  }

  getValue () {
    const value = {}

    this.childEditors.forEach((childEditor) => {
      value[childEditor.getKey()] = childEditor.getValue()
    })

    return value
  }

  refreshUI () {
    for (const key in this.value) {
      if (!Object.prototype.hasOwnProperty.call(this.value, key)) {
        continue
      }

      const childEditor = this.getChildEditor(key)

      if (childEditor) {
        childEditor.setValue(this.value[childEditor.getKey()], false)
      } else {
        const value = this.value[key]

        const schema = {
          type: utils.getType(value),
          default: value
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

  destroy () {
    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ObjectEditor
