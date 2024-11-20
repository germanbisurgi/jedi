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

      instance.on('change', (context) => {
        const currentValue = this.activeInstance.getValue()
        const fittestIndex = this.getFittestIndex(currentValue)
        const mustSwitch = fittestIndex !== this.index

        if (mustSwitch) {
          this.setValue(currentValue, true, context)
        } else {
          this.value = this.activeInstance.getValue()
          this.emit('change', context)
        }
      })

      this.instances.push(instance)
    })

    this.on('set-value', (newValue, context) => {
      let ifValue = this.instanceWithoutIf.getValue()

      if (isObject(ifValue) && isObject(newValue)) {
        ifValue = overwriteExistingProperties(ifValue, newValue)
      }

      this.instances.forEach((instance, index) => {
        const startingValue = this.instanceStartingValues[index]
        const currentValue = instance.getValue()
        let instanceValue = startingValue

        if (isObject(startingValue) && isObject(newValue)) {
          if (context === 'editor') {
            instanceValue = overwriteExistingProperties(startingValue, ifValue)
          } else {
            instanceValue = overwriteExistingProperties(currentValue, newValue)
          }
        }

        instance.setValue(instanceValue, false, context)
      })

      const fittestIndex = this.getFittestIndex(newValue)
      const mustSwitch = fittestIndex !== this.index

      if (mustSwitch) {
        this.switchInstance(fittestIndex)
      }
    })

    // initial value and active instance
    this.value = this.instanceWithoutIf.getValue()
    const fittestIndex = this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex)
  }

  switchInstance (index) {
    if (this.activeInstance) {
      this.activeInstance.unregister()
    }

    this.index = index
    this.activeInstance = this.instances[this.index]
    this.activeInstance.register()
    this.value = this.activeInstance.getValue()
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

  getAllOfCombinations (schemas) {
    const result = []

    const combineProperties = (schema1, schema2) => {
      return { ...schema1, ...schema2 }
    }

    const generateCombinations = (current, remaining) => {
      if (remaining.length === 0) {
        result.push(current)
        return
      }

      const nextSchema = remaining[0]

      generateCombinations(combineProperties(current, nextSchema), remaining.slice(1))
      generateCombinations(current, remaining.slice(1))
    }

    for (let i = 0; i < schemas.length; i++) {
      generateCombinations(schemas[i], schemas.slice(i + 1))
    }

    result.sort((a, b) => Object.keys(a).length - Object.keys(b).length)

    return result
  }
}

export default InstanceIfThenElse
