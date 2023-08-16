import Instance from './instance'
import EditorMultiple from '../editors/multiple'
import {
  isSet,
  mergeDeep,
  isArray,
  different,
  notSet,
  clone,
  isObject,
  overwriteExistingProperties
} from '../helpers/utils'
import Jedi from '../jedi'
import { getSchemaAnyOf, getSchemaElse, getSchemaIf, getSchemaOneOf, getSchemaOption, getSchemaThen, getSchemaTitle, getSchemaType } from '../helpers/schema'

/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceMultiple extends Instance {
  setUI () {
    this.ui = new EditorMultiple(this)
  }

  prepare () {
    this.instances = []
    this.activeInstance = null
    this.lastIndex = 0
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []

    this.on('set-value', () => {
      this.onSetValue()
    })

    const schemaType = getSchemaType(this.schema)

    if (isSet(getSchemaIf(this.schema))) {
      const schemaClone = clone(this.schema)
      this.if = clone(getSchemaIf(this.schema))
      const schemaThen = clone(getSchemaThen(this.schema))
      const schemaElse = clone(getSchemaElse(this.schema))

      delete schemaClone.if
      delete schemaClone.then
      delete schemaClone.else

      const thenSchema = schemaThen ? mergeDeep({}, schemaClone, schemaThen) : mergeDeep({}, schemaClone)
      const elseSchema = schemaElse ? mergeDeep({}, schemaClone, schemaElse) : mergeDeep({}, schemaClone)

      this.schemas.push(thenSchema)
      this.schemas.push(elseSchema)

      this.switcherOptionValues = [0, 1]
      this.switcherOptionsLabels = ['then', 'else']
    } else if (isSet(getSchemaAnyOf(this.schema)) || isSet(getSchemaOneOf(this.schema))) {
      const schemasOf = isSet(getSchemaAnyOf(this.schema)) ? getSchemaAnyOf(this.schema) : getSchemaOneOf(this.schema)
      const cloneSchema = clone(this.schema)
      delete cloneSchema['anyOf']
      delete cloneSchema['oneOf']
      delete cloneSchema['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...cloneSchema, ...schema }

        const schemaTitle = getSchemaTitle(cloneSchema)

        if (isSet(schemaTitle)) {
          schema.title = schemaTitle
        }

        const switcherOptionsLabel = getSchemaOption(schema, 'switcherTitle') || 'Option-' + (index + 1)
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(switcherOptionsLabel)

        this.schemas.push(schema)
      })
    } else if (isArray(schemaType)) {
      schemaType.forEach((type, index) => {
        const schemaClone = clone(this.schema)

        const schema = {
          ...schemaClone,
          ...{ type: type, title: type[0].toUpperCase() + type.slice(1) }
        }

        if (isSet(schemaClone.title)) {
          schema.title = schemaClone.title
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(type.charAt(0).toUpperCase() + type.slice(1))

        this.schemas.push(schema)
      })
    } else if (schemaType === 'any' || !schemaType) {
      const schemaClone = clone(this.schema)

      this.schemas = [
        { ...schemaClone, ...{ type: 'string' } },
        { ...schemaClone, ...{ type: 'number' } },
        { ...schemaClone, ...{ type: 'integer' } },
        { ...schemaClone, ...{ type: 'boolean' } },
        { ...schemaClone, ...{ type: 'array' } },
        { ...schemaClone, ...{ type: 'object' } },
        { ...schemaClone, ...{ type: 'null' } }
      ]

      this.schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
      })

      this.switcherOptionsLabels = [
        'String', 'Number', 'Integer', 'Boolean', 'Array', 'Object', 'Null'
      ]
    }

    // Instances
    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this.parent
      })

      instance.unregister()

      instance.on('change', () => {
        this.value = this.activeInstance.getValue()
        this.emit('change')
        this.switchIf()
      })

      this.instances.push(instance)

      this.register()
    })

    if (isSet(this.instances[0])) {
      if (this.if) {
        this.switchIf()
      } else {
        this.switchInstance(0)
      }
    }
  }

  switchInstance (index, value) {
    this.lastIndex = this.index
    this.index = index
    this.activeInstance = this.instances[index]

    if (isSet(value)) {
      this.activeInstance.setValue(value, false)
    }

    const lastInstanceValue = this.instances[this.lastIndex].getValue()
    const currentInstanceValue = this.activeInstance.getValue()

    if (isObject(lastInstanceValue) && isObject(currentInstanceValue)) {
      const mergedValue = overwriteExistingProperties(currentInstanceValue, lastInstanceValue)
      this.activeInstance.setValue(mergedValue, false)
    }

    this.value = this.activeInstance.getValue()
    this.emit('change')
  }

  switchIf () {
    if (isSet(this.if)) {
      const ifIndex = this.getIfIndex(this.getValue())
      this.switchInstance(ifIndex)
    }
  }

  getIfIndex (value) {
    const ifEditor = new Jedi({ schema: this.if, startValue: value, refParser: false })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()
    return ifErrors.length === 0 ? 0 : 1
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex (value) {
    let index = 0
    let fittestIndex
    let championErrors

    for (const instance of this.instances) {
      if (instance.instances) {
        instance.setValue(value, false)
      }

      const instanceErrors = this.jedi.validator.getErrors(value, instance.schema, instance.getKey(), instance.path)

      if (notSet(fittestIndex) || notSet(championErrors)) {
        fittestIndex = index
        championErrors = instanceErrors
      }

      if (instanceErrors.length < championErrors.length) {
        fittestIndex = index
        championErrors = instanceErrors
      }

      index++
    }

    return fittestIndex
  }

  onSetValue () {
    const newValue = this.value

    // if value matches the active instance type set the value. Else switch to the first
    // instance that match the value.
    if (different(this.activeInstance.getValue(), newValue)) {
      const fittestIndex = isSet(this.if) ? this.getIfIndex(newValue) : this.getFittestIndex(newValue)
      this.switchInstance(fittestIndex, newValue)
    }

    this.activeInstance.setValue(newValue, false)
    this.value = this.activeInstance.getValue()
  }

  getValue () {
    if (!this.activeInstance) {
      return
    }

    return this.activeInstance.getValue()
  }

  destroy () {
    this.instances.forEach((instance) => {
      instance.destroy()
    })

    super.destroy()
  }
}

export default InstanceMultiple
