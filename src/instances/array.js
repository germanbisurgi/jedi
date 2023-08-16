import Instance from './instance'
import { getType, isSet, clone, isArray, notSet, isObject } from '../helpers/utils'
import EditorArray from '../editors/array'
import EditorArrayNav from '../editors/array-nav'
import { getSchemaFormat, getSchemaItems, getSchemaPrefixItems, getSchemaType } from '../helpers/schema'

/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const schemaFormat = getSchemaFormat(this.schema)

    if (schemaType === 'array' && schemaFormat === 'nav') {
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

    if (isObject(schema) && notSet(getSchemaType(schema))) {
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

    value.forEach((itemValue) => {
      const child = this.createItemInstance(itemValue)
      child.setValue(itemValue, false)
      this.children.push(child)
    })
  }
}

export default InstanceArray
