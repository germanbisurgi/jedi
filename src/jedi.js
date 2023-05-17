import Schema from './schema'
import Validator from './validation/validator'
import EventEmitter from './event-emitter'
import { getType, hasOwn, isArray, isSet, notSet } from './utils'
import MultipleInstance from './instances/multiple'
import BooleanInstance from './instances/boolean'
import ObjectInstance from './instances/object'
import ArrayInstance from './instances/array'
import StringInstance from './instances/string'
import NumberInstance from './instances/number'
import NullInstance from './instances/null'
import RefParser from './ref-parser'

class Jedi extends EventEmitter {
  constructor (options) {
    super()
    this.options = Object.assign({
      container: null,
      isEditor: false,
      editableProperties: false,
      alwaysShowErrors: false,
      showRequiredOnly: false,
      schema: {},
      theme: 'wireframe',
      rootName: 'root',
      refParser: true
    }, options)

    this.instances = {}
    this.root = null
    this.theme = null
    this.validator = null
    this.schema = null
    this.refParser = null
    this.init()
  }

  init () {
    this.validator = new Validator()
    if (this.options.refParser) {
      this.refParser = new RefParser({
        XMLHttpRequest: this.options.XMLHttpRequest
      })

      this.options.schema = this.refParser.dereference(this.options.schema)
    }

    this.schema = new Schema(this.options.schema)

    this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema
    })

    if (isSet(this.options.startValue)) {
      this.root.setValue(this.options.startValue)
    }

    if (this.options.isEditor && this.options.container) {
      this.container = this.options.container
      this.appendHiddenInput()
      this.container.appendChild(this.root.ui.container)
      this.container.classList.add('jedi-ready')
    }

    this.root.on('change', () => {
      this.emit('change')
    })
  }

  /**
   * Appends a hidden input to the root container who's value will be the value
   * of the root instance.
   */
  appendHiddenInput () {
    const hiddenControl = this.root.ui.theme.getInputControl({
      type: 'hidden',
      id: 'jedi-hidden-input'
    })
    this.hiddenInput = hiddenControl.input

    this.hiddenInput.setAttribute('name', 'json')

    this.container.appendChild(this.hiddenInput)
    this.hiddenInput.value = JSON.stringify(this.getValue())

    this.on('change', () => {
      this.hiddenInput.value = JSON.stringify(this.getValue())
    })
  }

  /**
   * Adds a child instance pointer to the instances list
   */
  register (instance) {
    this.instances[instance.path] = instance
  }

  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister (instance) {
    this.instances[instance.path] = null
    delete this.instances[instance.path]
  }

  /**
   * Creates an json instance
   */
  createInstance (config) {
    let instance

    // circular $ref are not initially dereferenced and must be defined on creation
    if (this.options.refParser && hasOwn(config.schema, '$ref')) {
      config.schema = this.refParser.define(config.schema['$ref'])
    }

    config.schema = new Schema(config.schema)

    if (config.schema.typeIs('boolean')) {
      instance = new BooleanInstance(config)
    }

    if (config.schema.typeIs('object')) {
      instance = new ObjectInstance(config)
    }

    if (config.schema.typeIs('array')) {
      instance = new ArrayInstance(config)
    }

    if (config.schema.typeIs('string')) {
      instance = new StringInstance(config)
    }

    if (config.schema.typeIsNumeric()) {
      instance = new NumberInstance(config)
    }

    if (config.schema.typeIs('null')) {
      instance = new NullInstance(config)
    }

    if (isSet(config.schema.anyOf()) || isSet(config.schema.oneOf()) || config.schema.typeIs('any') || isArray(config.schema.type()) || notSet(config.schema.type())) {
      if (notSet(config.schema.type()) && isSet(config.schema.default())) {
        const originalSchema = config.schema.clone()
        originalSchema.type = getType(config.schema.default())
        config.schema = new Schema(originalSchema)
        return this.createInstance(config)
      } else {
        instance = new MultipleInstance(config)
      }
    }

    if (isSet(instance)) {
      return instance
    }
  }

  /**
   * Returns the value of the root instance
   * @return {*}
   */
  getValue () {
    return this.root.getValue()
  }

  /**
   * Sets the value of the root instance
   * @return {*}
   */
  setValue () {
    return this.root.setValue(...arguments)
  }

  /**
   * Returns a instance by path
   * @return {*}
   */
  getInstance (path) {
    return this.instances[path]
  }

  /**
   * Disables the root instance and it's children user interfaces
   */
  disable () {
    this.root.ui.disable()
  }

  /**
   * Enables the root instance and it's children user interfaces
   */
  enable () {
    this.root.ui.enable()
  }

  /**
   * Returns an array of validation error messages
   */
  validate () {
    let errors = []

    Object.keys(this.instances).forEach((key) => {
      const editor = this.instances[key]
      errors = [...errors, ...editor.validate()]
    })

    return errors
  }

  /**
   * Destroy the root instance and it'S children
   */
  destroy () {
    this.root.destroy()

    if (this.options.isEditor) {
      this.container.innerHTML = ''
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Jedi