import Instance from './instance.js'
import EditorIfThenElse from '../editors/if-then-else.js'
import Jedi from '../jedi.js'

import {
  isSet,
  mergeDeep,
  clone,
  isObject,
  overwriteExistingProperties
} from '../helpers/utils.js'

import {
  getSchemaElse,
  getSchemaIf,
  getSchemaThen
} from '../helpers/schema.js'

/**
 * Represents a InstanceIfThenElse instance.
 * @extends Instance
 */
class InstanceIfThenElse extends Instance {
  setUI () {
    this.ui = new EditorIfThenElse(this)
  }

  prepare () {
    this.instances = []
    this.instanceStartingValues = []
    this.instanceWithoutIf = null
    this.activeInstance = null
    this.index = 0
    this.schemas = []
    this.ifThenElseShemas = []

    this.traverseSchema(this.schema)

    delete this.schema.if
    delete this.schema.then
    delete this.schema.else

    this.ifThenElseShemas.forEach((item) => {
      if (isSet(item.then)) {
        this.schemas.push(mergeDeep({}, clone(this.schema), item.then))
      }

      if (isSet(item.else)) {
        this.schemas.push(mergeDeep({}, clone(this.schema), item.else))
      }
    })

    const schemaClone = clone(this.schema)
    delete schemaClone.if
    delete schemaClone.then
    delete schemaClone.else

    this.instanceWithoutIf = this.jedi.createInstance({
      jedi: this.jedi,
      schema: schemaClone,
      path: this.path,
      parent: this.parent
    })

    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this.parent
      })

      this.instanceStartingValues.push(instance.getValue())

      instance.off('change')

      this.instances.push(instance)
    })

    this.on('set-value', (value, context) => {
      this.changeValue(value, context)
    })

    const ifValue = this.instanceWithoutIf.getValue()
    this.changeValue(ifValue)
  }

  changeValue (value, context = 'instance') {
    const ifValue = this.getIfValueFromValue(value)
    const fittestIndex = this.getFittestIndex(ifValue)
    const indexChanged = fittestIndex !== this.index
    this.index = fittestIndex
    this.activeInstance = this.instances[fittestIndex]
    this.activeInstance.register()
    // console.log('value', value)
    // console.log('ifValue', ifValue)
    // console.log(this.jedi.instances['#'].schema)

    this.instances.forEach((instance, index) => {
      instance.off('change')

      const startingValue = this.instanceStartingValues[index]
      const currentValue = instance.getValue()
      let instanceValue = value

      if (isObject(startingValue) && isObject(value)) {
        if (indexChanged) {
          instanceValue = overwriteExistingProperties(startingValue, ifValue)
          this.jedi.updateInstancesWatchedData()
        } else {
          instanceValue = overwriteExistingProperties(currentValue, value)
        }

        if (context === 'instance') {
          instanceValue = overwriteExistingProperties(currentValue, value)
        }
      }

      instance.setValue(instanceValue, false, context)

      instance.on('change', (context) => {
        const value = instance.getValue()
        this.changeValue(value, context)
      })
    })

    this.value = this.activeInstance.getValue()
    this.emit('change', context)
  }

  getIfValueFromValue (value) {
    let ifValue = this.instanceWithoutIf.getValue()

    if (isObject(ifValue) && isObject(value)) {
      ifValue = overwriteExistingProperties(ifValue, value)
      return ifValue
    }

    return value
  }

  switchInstance (index) {
    this.index = index
    this.activeInstance = this.instances[this.index]
  }

  traverseSchema (schema) {
    const schemaIf = getSchemaIf(schema)

    if (isSet(schemaIf)) {
      const schemaThen = getSchemaThen(schema)
      const schemaElse = getSchemaElse(schema)

      this.ifThenElseShemas.push({
        if: schemaIf,
        then: isSet(schemaThen) ? schemaThen : {}
      })

      this.ifThenElseShemas.push({
        if: schemaIf,
        else: isSet(schemaElse) ? schemaElse : {}
      })
    }
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex (value) {
    let fittestIndex = this.index

    this.ifThenElseShemas.forEach((schema, index) => {
      const ifValidator = new Jedi({
        schema: schema.if,
        data: value,
        refParser: this.jedi.refParser
      })

      const ifErrors = ifValidator.getErrors()
      ifValidator.destroy()

      if (ifErrors.length === 0 && schema.then) {
        fittestIndex = index
      }

      if (ifErrors.length > 0 && schema.else) {
        fittestIndex = index
      }
    })

    return fittestIndex
  }

  destroy () {
    this.instances.forEach((instance) => {
      instance.destroy()
    })

    super.destroy()
  }
}

export default InstanceIfThenElse
