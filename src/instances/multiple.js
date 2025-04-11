import Instance from './instance.js'
import {
  isSet,
  isArray,
  different,
  clone,
  mergeDeep
} from '../helpers/utils.js'
import {
  getSchemaAnyOf, getSchemaDescription,
  getSchemaOneOf,
  getSchemaTitle,
  getSchemaType,
  getSchemaXOption
} from '../helpers/schema.js'

/**
 * Represents a InstanceMultiple instance.
 * @extends Instance
 */
class InstanceMultiple extends Instance {
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

    if (isSet(getSchemaAnyOf(this.schema)) || isSet(getSchemaOneOf(this.schema))) {
      const schemasOf = isSet(getSchemaAnyOf(this.schema)) ? getSchemaAnyOf(this.schema) : getSchemaOneOf(this.schema)
      const schemaCopy = clone(this.schema)
      delete schemaCopy['anyOf']
      delete schemaCopy['oneOf']
      delete schemaCopy['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...schemaCopy, ...schema }

        let switcherOptionsLabel = 'Option-' + (index + 1)
        const switcherTitle = getSchemaXOption(schema, 'switcherTitle')
        const schemaTitle = getSchemaTitle(schema)
        const schemaDescription = getSchemaDescription(schema)

        if (isSet(schemaDescription)) {
          switcherOptionsLabel = schemaDescription
        }

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
      const schemaClone = clone(this.schema)

      this.schemas = [
        { ...schemaClone, ...{ type: 'string' } },
        { ...schemaClone, ...{ type: 'boolean' } },
        { ...schemaClone, ...{ type: 'integer' } },
        { ...schemaClone, ...{ type: 'number' } },
        { ...schemaClone, ...{ type: 'array' } },
        { ...schemaClone, ...{ type: 'object' } },
        { ...schemaClone, ...{ type: 'null' } }
      ]

      this.schemas.forEach((schema, index) => {
        this.switcherOptionValues.push(index)
      })

      this.switcherOptionsLabels = [
        'String', 'Boolean', 'Integer', 'Number', 'Array', 'Object', 'Null'
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

      instance.off('change')

      instance.on('change', (initiator) => {
        this.value = this.activeInstance.getValue()
        this.emit('change', initiator)
      })

      this.instances.push(instance)

      this.register()
    })

    const fittestIndex = this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex, this.value)
  }

  switchInstance (index, value, initiator = 'api') {
    this.lastIndex = this.index
    this.index = index
    this.activeInstance = this.instances[index]

    if (isSet(value)) {
      this.activeInstance.setValue(value, false, initiator)
    }

    this.setValue(this.activeInstance.getValue(), true, initiator)
  }

  onSetValue () {
    if (different(this.activeInstance.getValue(), this.value)) {
      const fittestIndex = this.getFittestIndex(this.value)
      this.switchInstance(fittestIndex, this.value)
    }
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex (value) {
    let fittestIndex
    let championErrors

    for (let index = 0; index < this.instances.length; index++) {
      const instance = this.instances[index]
      const instanceErrors = this.jedi.validator.getErrors(value, instance.schema, instance.getKey(), instance.path)

      // If an instance has no errors, return its index immediately
      if (instanceErrors.length === 0) {
        fittestIndex = index
        break
      }

      if (fittestIndex === undefined || championErrors === undefined || instanceErrors.length < championErrors.length) {
        fittestIndex = index
        championErrors = instanceErrors
      }
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
