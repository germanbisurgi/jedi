import Editor from '../editor'
import utils from '../utils'

class ObjectEditor extends Editor {
  build () {
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

    // addBtn
    const addBtn = this.jedi.theme.getButton('add')
    this.container.appendChild(addBtn)
    addBtn.addEventListener('click', () => {
      this.addChildEditor({ title: 'test', type: 'string' }, 'test-' + Math.ceil(Math.random() * 1000))
      this.onChildEditorChange()
    })
  }

  addChildEditor (schema, key) {
    console.log('addChildEditor', key)
    const exist = this.getChildEditor(key)

    if (exist) {
      return
    }

    const editor = this.jedi.createEditor({
      jedi: this.jedi,
      schema: schema,
      path: this.path + '.' + key,
      parent: this
    })
    this.container.appendChild(editor.container)
    this.childEditors.push(editor)

    // removeBtn
    const removeBtn = this.jedi.theme.getButton('remove')
    editor.container.appendChild(removeBtn)
    removeBtn.addEventListener('click', () => {
      this.removeChildEditor(key)
    })
  }

  removeChildEditor (key) {
    console.log('removeChildEditor', key)

    for (let i = this.childEditors.length - 1; i >= 0; i--) {
      const editor = this.childEditors[i]
      if (editor.getKey() === key) {
        this.childEditors.splice(i, 1)
        editor.destroy()
      }
    }

    const value = this.getValue()
    delete value[key]
    this.setValue(value, true)
  }

  onChildEditorChange () {
    console.log('onChildEditorChange')
    this.setValue(this.getValue(), true)
  }

  getValue () {
    const value = {}

    this.childEditors.forEach((childEditor) => {
      // todo if required
      value[childEditor.getKey()] = childEditor.getValue()
    })

    return value
  }

  refreshUI () {
    const value = this.getValue()

    console.log('refreshUI', value)

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
    console.log('destroy')

    this.childEditors.forEach((childEditor) => {
      childEditor.destroy()
    })

    super.destroy()
  }
}

export default ObjectEditor
