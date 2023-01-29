import Instance from '../instance'
import Schema from '../schema'
import { getType, clone, isArray } from '../utils'
import ArrayEditor from '../editors/array'

class ArrayInstance extends Instance {
  setUI () {
    this.ui = new ArrayEditor(this)
  }

  createItemInstance (value) {
    const schema = this.schema.items() ? this.schema.items() : { type: getType(value) }

    return this.jedi.createEditor({
      jedi: this.jedi,
      schema: new Schema(schema),
      path: this.path + '.' + this.childEditors.length,
      parent: this
    })
  }

  move (fromIndex, toIndex) {
    const value = clone(this.getValue())
    const item = value[fromIndex]
    value.splice(fromIndex, 1)
    value.splice(toIndex, 0, item)
    this.setValue(value)
  }

  addItem () {
    const tempEditor = this.createItemInstance()
    const value = clone(this.getValue())
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value)
  }

  deleteItem (itemIndex) {
    const currentValue = clone(this.getValue())
    const newValue = currentValue.filter((item, index) => index !== itemIndex)
    this.setValue(newValue)
  }

  onChildEditorChange () {
    const value = []

    this.childEditors.forEach((instance) => {
      value.push(instance.getValue())
    })

    this.setValue(value)
  }

  sanitize (value) {
    if (isArray(value)) {
      return value
    }

    return []
  }
}

export default ArrayInstance
