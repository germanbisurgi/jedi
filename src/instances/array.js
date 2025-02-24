import Instance from './instance.js'
import { isSet, clone, isArray } from '../helpers/utils.js'
import { getSchemaDefault, getSchemaItems, getSchemaPrefixItems } from '../helpers/schema.js'

/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends Instance {
  prepare () {
    this.refreshChildren()

    this.on('set-value', () => {
      this.refreshChildren()
    })
  }

  createItemInstance () {
    let schema
    const itemsCount = this.children.length
    const schemaItems = getSchemaItems(this.schema)
    const schemaPrefixItems = getSchemaPrefixItems(this.schema)
    schema = isSet(schemaItems) ? schemaItems : {}

    const hasPrefixItemsSchema = isSet(schemaPrefixItems) && isSet(schemaPrefixItems[itemsCount])

    if (hasPrefixItemsSchema) {
      schema = schemaPrefixItems[itemsCount]
    }

    return this.jedi.createInstance({
      jedi: this.jedi,
      schema: schema,
      path: this.path + this.jedi.pathSeparator + itemsCount,
      parent: this
    })
  }

  setDefaultValue () {
    const schemaDefault = getSchemaDefault(this.schema)

    if (isSet(schemaDefault)) {
      this.setValue(schemaDefault)
    }
  }

  move (fromIndex, toIndex, initiator) {
    const value = clone(this.getValue())
    const item = value[fromIndex]
    value.splice(fromIndex, 1)
    value.splice(toIndex, 0, item)
    this.setValue(value, true, initiator)
  }

  addItem (initiator) {
    const tempEditor = this.createItemInstance()
    const value = clone(this.getValue())
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value, true, initiator)
  }

  deleteItem (itemIndex, initiator) {
    const currentValue = clone(this.getValue())
    const newValue = currentValue.filter((item, index) => index !== itemIndex)
    this.setValue(newValue, true, initiator)
  }

  onChildChange (initiator) {
    const value = []

    this.children.forEach((child) => {
      value.push(child.getValue())
    })

    this.value = value
    this.jedi.emit('instance-change', this, initiator)
    // this.emit('change', true, initiator)
    this.emit('change', initiator)
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
      child.setValue(itemValue, false)
    })
  }
}

export default InstanceArray
