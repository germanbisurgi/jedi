import Instance from './instance'
import EditorMultiple from '../editors/multiple'
import {
  isSet,
  isObject,
  overwriteExistingProperties,
  mergeDeep,
  clone
} from '../helpers/utils'
import {
  getSchemaElse,
  getSchemaIf,
  getSchemaThen
} from '../helpers/schema'
import Jedi from '../jedi'

/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceIfThenElse extends Instance {
  setUI () {
    this.ui = new EditorMultiple(this)
  }

  prepare () {
    this.instances = []
    this.activeInstance = null
    this.activeInstanceChanged = true
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []
    this.ifThenElseShemas = []

    this.traverseSchema(this.schema)
    delete this.schema.if
    delete this.schema.then
    delete this.schema.else

    let index = 0

    this.ifThenElseShemas.forEach((item) => {
      if (isSet(item.then)) {
        this.schemas.push(mergeDeep({}, clone(this.schema), item.then))
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(JSON.stringify(item.then))
        index++
      }

      if (isSet(item.else)) {
        this.schemas.push(mergeDeep({}, clone(this.schema), item.else))
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(JSON.stringify(item.else))
        index++
      }
    })

    const schemaClone = clone(this.schema)
    delete schemaClone.if
    delete schemaClone.then
    delete schemaClone.else

    const instanceWithoutIf = this.jedi.createInstance({
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

      instance.unregister()

      instance.on('change', () => {
        const lastValue = this.value
        const valueBeforeSwitch = this.activeInstance.getValue()
        const fittestIndex = this.getFittestIndex(valueBeforeSwitch)
        const mustSwitch = fittestIndex !== this.index

        if (mustSwitch) {
          this.value = this.activeInstance.getValue()
          this.emit('set-value', { lastValue })
        } else {
          this.value = this.activeInstance.getValue()
          this.emit('change')
        }
      })

      this.instances.push(instance)

      this.register()
    })

    this.on('set-value', (payload = {}) => {
      const valueBeforeSwitch = this.value
      const lastInstance = this.activeInstance
      const fittestIndex = this.getFittestIndex(valueBeforeSwitch)
      const mustSwitch = fittestIndex !== this.index

      console.log('HEY', mustSwitch)

      if (mustSwitch) {
        this.switchInstance(fittestIndex)

        if (payload.lastValue) {
          console.log('before', JSON.stringify(payload.lastValue))
          lastInstance.setValue(payload.lastValue, false, false)
          console.log('after', JSON.stringify(lastInstance.getValue()))
        }

        let newValue = this.activeInstance.getValue()

        if (isObject(valueBeforeSwitch) && isObject(newValue)) {
          newValue = overwriteExistingProperties(newValue, valueBeforeSwitch)
        }

        this.activeInstance.setValue(newValue)
      } else {
        this.activeInstance.setValue(valueBeforeSwitch)
        this.value = this.activeInstance.getValue()
        this.emit('change')
      }
    })

    // initial value and active instance
    this.value = instanceWithoutIf.getValue()
    const fittestIndex = this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex)
  }

  switchInstance (index) {
    this.index = index
    this.activeInstance = this.instances[this.index]
    this.value = this.activeInstance.value
    this.emit('change')
  }

  traverseSchema (schema) {
    const schemaIf = getSchemaIf(schema)

    if (isSet(schemaIf)) {
      const schemaThen = getSchemaThen(schema)
      const schemaElse = getSchemaElse(schema)

      if (isSet(schemaThen)) {
        this.ifThenElseShemas.push({
          if: schemaIf,
          then: schemaThen
        })
      }

      if (isSet(schemaElse)) {
        this.ifThenElseShemas.push({
          if: schemaIf,
          else: schemaElse
        })
      }
    }
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex (value) {
    let fittestIndex = this.index

    this.ifThenElseShemas.forEach((schema, index) => {
      const ifValidator = new Jedi({ schema: schema.if, data: value })
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