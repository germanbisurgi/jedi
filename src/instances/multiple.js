import Instance from './instance'
import EditorMultiple from '../editors/multiple'
import {
  isSet,
  isArray,
  different,
  notSet,
  clone,
  isObject,
  overwriteExistingProperties, mergeDeep, deepCopy
} from '../helpers/utils'
import Jedi from '../jedi'
import {
  getSchemaAnyOf,
  getSchemaOneOf,
  getSchemaOption, getSchemaTitle,
  getSchemaType
} from '../helpers/schema'

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
    this.activeInstanceChanged = true
    this.lastIndex = 0
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []

    this.on('set-value', () => {
      this.onSetValue()
    })

    const schemaType = getSchemaType(this.schema)

    if (isSet(getSchemaAnyOf(this.schema)) || isSet(getSchemaOneOf(this.schema))) {
      const schemasOf = isSet(getSchemaAnyOf(this.schema)) ? getSchemaAnyOf(this.schema) : getSchemaOneOf(this.schema)
      const schemaCopy = deepCopy(this.schema)
      delete schemaCopy['anyOf']
      delete schemaCopy['oneOf']
      delete schemaCopy['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...schemaCopy, ...schema }
        let switcherOptionsLabel = 'Option-' + (index + 1)

        const switcherTitle = getSchemaOption(schema, 'switcherTitle')
        const schemaTitle = getSchemaTitle(schema)

        if (isSet(schemaTitle)) {
          switcherOptionsLabel = schemaTitle
        }

        if (isSet(switcherTitle)) {
          switcherOptionsLabel = switcherTitle
        }

        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(switcherOptionsLabel)
        this.schemas.push(schema)
      })
    } else if (isArray(schemaType)) {
      schemaType.forEach((type, index) => {
        const schemaClone = mergeDeep(this.schema)

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
      const schemaClone = deepCopy(this.schema)

      this.schemas = [
        { ...schemaClone, ...{ type: 'object' } },
        { ...schemaClone, ...{ type: 'array' } },
        { ...schemaClone, ...{ type: 'string' } },
        { ...schemaClone, ...{ type: 'number' } },
        { ...schemaClone, ...{ type: 'integer' } },
        { ...schemaClone, ...{ type: 'boolean' } },
        { ...schemaClone, ...{ type: 'null' } }
      ]

      this.schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
      })

      this.switcherOptionsLabels = [
        'Object', 'Array', 'String', 'Number', 'Integer', 'Boolean', 'Null'
      ]
    }

    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this.parent,
        value: clone(this.value)
      })

      if (isSet(this.value)) {
        instance.setValue(this.value, false)
      }

      instance.unregister()

      instance.on('change', () => {
        this.activeInstanceChanged = true
        this.setValue(this.activeInstance.getValue())
      })

      this.instances.push(instance)

      this.register()
    })

    const fittestIndex = isSet(this.if) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex, this.value)
  }

  switchInstance (index, value) {
    this.lastIndex = this.index
    this.index = index
    this.activeInstance = this.instances[index]

    if (isSet(value)) {
      this.activeInstance.setValue(value, false)
    }

    this.setValue(this.activeInstance.getValue())
  }

  onSetValue () {
    if (different(this.activeInstance.getValue(), this.value) || this.activeInstanceChanged) {
      this.activeInstanceChanged = false
      const fittestIndex = isSet(this.if) ? this.getIfIndex(this.value) : this.getFittestIndex(this.value)
      this.switchInstance(fittestIndex, this.value)
    }
  }

  reassignValues () {
    const lastInstanceValue = this.instances[this.lastIndex].getValue()
    const currentInstanceValue = this.activeInstance.getValue()

    if (isObject(lastInstanceValue) && isObject(currentInstanceValue)) {
      const mergedValue = overwriteExistingProperties(currentInstanceValue, lastInstanceValue)
      this.activeInstance.setValue(mergedValue, false)
    }
  }

  getIfIndex (value) {
    const ifEditor = new Jedi({ schema: this.if, data: value })
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

  destroy () {
    this.instances.forEach((instance) => {
      instance.destroy()
    })

    super.destroy()
  }
}

export default InstanceMultiple
