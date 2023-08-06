import Instance from './instance'
import EditorMultiple from '../editors/multiple'
import {
  isSet,
  mergeDeep,
  isArray,
  different,
  isObject,
  notSet, overwriteExistingProperties
} from '../utils'
import Jedi from '../jedi'

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

    if (isSet(this.schema.if())) {
      const schemaClone = this.schema.clone()
      this.thenSchema = this.schema.then() ? mergeDeep({}, schemaClone, this.schema.then()) : mergeDeep({}, schemaClone)
      this.elseSchema = this.schema.else() ? mergeDeep({}, schemaClone, this.schema.else()) : mergeDeep({}, schemaClone)
      this.schemas.push(this.thenSchema)
      this.schemas.push(this.elseSchema)

      this.schemas.forEach((schema) => {
        delete schema.if
        delete schema.then
        delete schema.else
      })

      this.switcherOptionValues = [0, 1]
      this.switcherOptionsLabels = ['then', 'else']
    } else if (isSet(this.schema.anyOf()) || isSet(this.schema.oneOf())) {
      const schemasOf = isSet(this.schema.anyOf()) ? this.schema.anyOf() : this.schema.oneOf()
      const cloneSchema = this.schema.clone()
      delete cloneSchema['anyOf']
      delete cloneSchema['oneOf']
      delete cloneSchema['options']

      schemasOf.forEach((schema, index) => {
        schema = { ...cloneSchema, ...schema }

        // merge allOf
        if (isSet(schema.allOf) && schema.options?.mergeAllOf) {
          let merged = {}

          schema.allOf.forEach((allOfSchema) => {
            merged = mergeDeep(merged, allOfSchema)
          })

          schema = merged
        }

        if (isSet(cloneSchema.title)) {
          schema.title = cloneSchema.title
        }

        const switcherOptionsLabel = schema.options?.switcherTitle || 'Option-' + (index + 1)
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push(switcherOptionsLabel)

        this.schemas.push(schema)
      })
    } else if (isArray(this.schema.type())) {
      this.schema.type().forEach((type, index) => {
        const schemaClone = this.schema.clone()

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
    } else if (this.schema.typeIs('any') || !this.schema.type()) {
      const schemaClone = this.schema.clone()

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
        this.emit('change')
        this.switchIf()
      })

      this.instances.push(instance)

      this.register()
    })

    const schemaClone = this.schema.clone()
    const setValue = isObject(schemaClone)

    if (isSet(this.instances[0])) {
      this.switchInstance(0, false, setValue)
    }
  }

  switchInstance (newIndex, triggersChange = true, setValue = true) {
    this.lastIndex = this.index
    this.index = newIndex
    this.activeInstance = this.instances[this.index]

    if (setValue) {
      this.setValue(this.getValue(), triggersChange)
    }
  }

  switchIf () {
    if (isSet(this.schema.if())) {
      const ifIndex = this.getIfIndex(this.getValue())
      const preValue = this.getValue()
      this.switchInstance(ifIndex)
      const currentValue = this.getValue()
      const finalValue = overwriteExistingProperties(currentValue, preValue)
      this.setValue(finalValue, false)
    }
  }

  getIfIndex (value) {
    const ifEditor = new Jedi({ schema: this.schema.if(), startValue: value, refParser: false })
    const ifErrors = ifEditor.getErrors()
    ifEditor.destroy()
    return ifErrors.length === 0 ? 0 : 1
  }

  getFittestIndex (value) {
    let index = 0
    let fittestIndex
    let championErrors

    for (const instance of this.instances) {
      if (instance.instances) {
        instance.setValue(value)
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
    const value = this.value

    // if value matches the active instance type set the value. Else switch to the first
    // instance that match the value.
    if (different(this.activeInstance.getValue(), value)) {
      let fittestIndex

      if (isSet(this.schema.if())) {
        fittestIndex = this.getIfIndex(value)
      } else {
        fittestIndex = this.getFittestIndex(value)
      }

      this.switchInstance(fittestIndex, false)
    }

    this.activeInstance.setValue(value, false)
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
