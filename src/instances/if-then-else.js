import Instance from './instance'
import EditorMultiple from '../editors/multiple'
import Jedi from '../jedi'
import {
  isSet,
  different,
  isObject,
  overwriteExistingProperties,
  mergeDeep, clone
} from '../helpers/utils'
import {
  getSchemaElse,
  getSchemaIf,
  getSchemaThen
} from '../helpers/schema'

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
    this.lastIndex = 0
    this.index = 0
    this.schemas = []
    this.switcherOptionValues = []
    this.switcherOptionsLabels = []
    this.ifLookup = {}

    this.on('set-value', () => {
      this.onSetValue()
    })

    this.traverseSchema(this.schema)
    delete this.schema.if
    delete this.schema.then
    delete this.schema.else

    let index = 0

    Object.keys(this.ifLookup).forEach((key) => {
      const thenSchema = this.ifLookup[key]['then']
      const elseSchema = this.ifLookup[key]['else']

      if (isSet(thenSchema)) {
        const schema = mergeDeep({}, clone(this.schema), this.ifLookup[key]['then'])
        this.schemas.push(schema)
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push('then:' + JSON.stringify(thenSchema))
        index++
      }

      if (isSet(elseSchema)) {
        const schema = mergeDeep({}, clone(this.schema), this.ifLookup[key]['else'])
        this.schemas.push(schema)
        this.switcherOptionValues.push(index)
        this.switcherOptionsLabels.push('else:' + JSON.stringify(elseSchema))
        index++
      }
    })

    this.schemas.forEach((schema) => {
      const instance = this.jedi.createInstance({
        jedi: this.jedi,
        schema: schema,
        path: this.path,
        parent: this.parent
        // value: clone(this.value)
      })

      // if (isSet(this.value)) {
      //   instance.setValue(this.value, false)
      // }

      instance.unregister()

      instance.on('change', () => {
        this.activeInstanceChanged = true
        this.setValue(this.activeInstance.getValue())
      })

      this.instances.push(instance)

      this.register()
    })

    const fittestIndex = this.getFittestIndex(this.value)
    this.switchInstance(fittestIndex, this.value)
  }

  traverseSchema (schema) {
    const schemaIf = getSchemaIf(schema)

    if (isSet(schemaIf)) {
      const key = JSON.stringify(schema.if)
      this.ifLookup[key] = {}

      const schemaThen = getSchemaThen(schema)
      const schemaElse = getSchemaElse(schema)

      if (isSet(schemaThen)) {
        this.ifLookup[key]['then'] = schemaThen
        this.traverseSchema(schemaThen)
      }

      if (isSet(schemaElse)) {
        this.ifLookup[key]['else'] = schemaElse
        this.traverseSchema(schemaElse)
      }
    }
  }

  /**
   * Returns the index of the instance that has less validation errors
   */
  getFittestIndex () {
    Object.keys(this.ifLookup).forEach((key) => {
      const schema = JSON.parse(key)
      const value = this.getValue()
      const errors = this.jedi.validator.getErrors(value, schema)
      console.log('schema', key)
      console.log('value', value)
      console.log('errors', errors)
    })

    return this.index
  }

  switchInstance (index, value) {
    this.lastIndex = this.index
    this.index = index
    this.activeInstance = this.instances[index]

    // if (isSet(value)) {
    //   this.activeInstance.setValue(value, false)
    // }

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

  destroy () {
    this.instances.forEach((instance) => {
      instance.destroy()
    })

    super.destroy()
  }
}

export default InstanceIfThenElse
