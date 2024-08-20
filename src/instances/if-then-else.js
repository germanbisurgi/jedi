import Instance from './instance.js'
import EditorMultiple from '../editors/multiple.js'
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
import Jedi from '../jedi.js'

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
        const afterChangeValue = this.activeInstance.getValue()
        const fittestIndex = this.getFittestIndex(afterChangeValue)
        const mustSwitch = fittestIndex !== this.index

        if (mustSwitch) {
          this.setValue(afterChangeValue)
        } else {
          this.value = this.activeInstance.getValue()
          this.emit('change')
        }
      })

      this.instances.push(instance)

      this.register()
    })

    this.on('set-value', (newValue) => {
      this.instances.forEach((instance) => {
        const valueBefore = instance.getValue()
        let futureValue = newValue

        if (isObject(valueBefore) && isObject(futureValue)) {
          futureValue = overwriteExistingProperties(valueBefore, futureValue)
        }

        instance.setValue(futureValue, false)
      })

      const fittestIndex = this.getFittestIndex(newValue)
      const mustSwitch = fittestIndex !== this.index

      if (mustSwitch) {
        this.switchInstance(fittestIndex)
        this.emit('change')
      }
    })

    // initial value and active instance
    this.value = instanceWithoutIf.getValue()
    instanceWithoutIf.destroy()
    const fittestIndex = this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex)
  }

  switchInstance (index) {
    this.index = index
    this.activeInstance = this.instances[this.index]
    this.value = this.activeInstance.getValue()
    this.emit('change')
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
        data: value
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
