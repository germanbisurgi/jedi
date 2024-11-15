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
  getSchemaConst,
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
    this.activeInstance = null
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
        const optionLabel = 'then'
        this.switcherOptionsLabels.push(optionLabel)
        index++
      }

      if (isSet(item.else)) {
        this.schemas.push(mergeDeep({}, clone(this.schema), item.else))
        this.switcherOptionValues.push(index)
        const optionLabel = 'else'
        this.switcherOptionsLabels.push(optionLabel)
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

      this.instanceStartingValues.push(instance.getValue())

      instance.on('change', () => {
        const currentValue = this.activeInstance.getValue()
        const fittestIndex = this.getFittestIndex(currentValue)
        const mustSwitch = fittestIndex !== this.index

        if (mustSwitch) {
          this.setValue(currentValue)
        } else {
          this.value = this.activeInstance.getValue()
          this.emit('change')
        }
      })

      this.instances.push(instance)
    })

    this.on('set-value', (newValue) => {
      this.instances.forEach((instance) => {
        const currentValue = instance.getValue()

        if (isObject(currentValue) && isObject(newValue)) {
          newValue = overwriteExistingProperties(currentValue, newValue)

          // restore any const value here
          instance.children.forEach((child) => {
            const schemaConst = getSchemaConst(child.schema)

            if (isSet(schemaConst)) {
              newValue[child.getKey()] = schemaConst
            }
          })
        }

        instance.setValue(newValue, false)
      })

      const fittestIndex = this.getFittestIndex(newValue)
      const mustSwitch = fittestIndex !== this.index

      if (mustSwitch) {
        this.switchInstance(fittestIndex)
      }
    })

    // initial value and active instance
    this.value = instanceWithoutIf.getValue()
    instanceWithoutIf.destroy()
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
    // this.emit('change')
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
