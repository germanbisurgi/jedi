import Instance from './instance.js'
import { isSet, clone, isArray } from '../helpers/utils.js'
import {
  getSchemaDefault,
  getSchemaItems,
  getSchemaMinItems,
  getSchemaPrefixItems,
  getSchemaXOption
} from '../helpers/schema.js'

/**
 * Represents an InstanceArray instance.
 * @extends Instance
 */
class InstanceArray extends Instance {
  prepare () {
    const schemaMinItems = getSchemaMinItems(this.schema, 'minItems')
    const schemaEnforceMinItems = getSchemaXOption(this.schema, 'enforceMinItems')
    const enforceMinItems = isSet(schemaEnforceMinItems) ? schemaEnforceMinItems : this.jedi.options.enforceMinItems
    const isEditor = this.jedi.isEditor
    const hasEnforceMinItems = isSet(enforceMinItems) && enforceMinItems === true
    const hasMinItems = isSet(schemaMinItems)

    if (isEditor && hasEnforceMinItems && hasMinItems) {
      for (let i = 0; i < schemaMinItems; i++) {
        this.addItem()
      }
    }

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
    this.emit('item-move', initiator)
    this.jedi.emit('item-move', initiator)
  }

  addItem (initiator) {
    const tempEditor = this.createItemInstance()
    const value = clone(this.getValue())
    value.push(tempEditor.getValue())
    tempEditor.destroy()
    this.setValue(value, true, initiator)
    const instance = this.children[this.children.length - 1]
    this.emit('item-add', initiator, instance)
    this.jedi.emit('item-add', initiator, instance)
  }

  deleteItem (itemIndex, initiator) {
    const currentValue = clone(this.getValue())
    const newValue = currentValue.filter((item, index) => index !== itemIndex)
    this.setValue(newValue, true, initiator)
    this.emit('item-delete', initiator)
    this.jedi.emit('item-delete', initiator)
  }

  onChildChange (initiator) {
    const value = []

    this.children.forEach((child) => {
      value.push(child.getValue())
    })

    this.value = value
    this.jedi.emit('instance-change', this, initiator)
    this.emit('change', initiator)
    this.emit('value-change-temp', initiator)
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
