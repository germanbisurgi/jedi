import Instance from './instance'
import { getType, isSet, clone, isArray, notSet, isObject } from '../utils'
import EditorArray from '../editors/array'
import EditorArrayNav from '../editors/array-nav'

/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends Instance {
  setUI () {
    if (this.schema.typeIs('array') && this.schema.formatIs('nav')) {
      this.ui = new EditorArrayNav(this)
    } else {
      this.ui = new EditorArray(this)
    }
  }

  prepare () {
    this.refreshChildren()

    this.on('set-value', () => {
      this.refreshChildren()
    })
  }

  createItemInstance (value) {
    const itemsCount = this.children.length
    let schema

    schema = isSet(this.schema.items()) ? this.schema.items() : {}

    const hasPrefixItemsSchema = isSet(this.schema.prefixItems()) && isSet(this.schema.prefixItems()[itemsCount])

    if (hasPrefixItemsSchema) {
      schema = this.schema.prefixItems()[itemsCount]
    }

    if (isObject(schema) && notSet(schema.type)) {
      schema.type = isSet(value) ? getType(value) : 'any'
    }

    const child = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + itemsCount,
      parent: this
    })

    if (isSet(value)) {
      child.setValue(value, false)
    }

    return child
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

  onChildChange () {
    const value = []

    this.children.forEach((child) => {
      value.push(child.getValue())
    })

    this.setValue(value)
  }

  refreshChildren () {
    this.children = []

    const value = this.getValue()

    if (!isArray(value)) {
      return
    }

    value.forEach((itemValue, index) => {
      const child = this.createItemInstance(itemValue)
      child.setValue(itemValue, false)
      this.children.push(child)
    })
  }
}

export default InstanceArray
