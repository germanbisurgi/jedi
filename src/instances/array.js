import Instance from './instance.js'
import { isSet, clone, isArray } from '../helpers/utils.js'
import EditorArray from '../editors/array.js'
import EditorArrayNav from '../editors/array-nav.js'
import { getSchemaItems, getSchemaPrefixItems, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const nav = getSchemaXOption(this.schema, 'nav')

    if (schemaType === 'array' && isSet(nav)) {
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
    let schema
    const itemsCount = this.children.length
    const schemaItems = getSchemaItems(this.schema)
    const schemaPrefixItems = getSchemaPrefixItems(this.schema)
    schema = isSet(schemaItems) ? schemaItems : {}

    const hasPrefixItemsSchema = isSet(schemaPrefixItems) && isSet(schemaPrefixItems[itemsCount])

    if (hasPrefixItemsSchema) {
      schema = schemaPrefixItems[itemsCount]
    }

    const child = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + itemsCount,
      parent: this,
      value: clone(value)
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

    this.value = value
    this.emit('change')
  }

  refreshChildren () {
    this.children = []

    const value = this.getValue()

    if (!isArray(value)) {
      return
    }

    value.forEach((itemValue) => {
      const child = this.createItemInstance(itemValue)
      this.children.push(child)
    })
  }
}

export default InstanceArray
