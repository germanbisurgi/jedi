import Schema from './schema'
import Validator from './validation/validator'
import EventEmitter from './event-emitter'
import MultipleInstance from './instances/multiple'
import BooleanInstance from './instances/boolean'
import ObjectInstance from './instances/object'
import ArrayInstance from './instances/array'
import StringInstance from './instances/string'
import NumberInstance from './instances/number'
import NullInstance from './instances/null'
import RefParser from './ref-parser'
import { getType, hasOwn, isArray, isSet, notSet } from './utils'

/**
 * Represents a Jedi instance.
 */
class Jedi extends EventEmitter {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.isEditor - Generates UI controls to edit the JSON value
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor (options) {
    super()

    this.options = Object.assign({
      container: null,
      isEditor: false,
      editableProperties: false,
      alwaysShowErrors: false,
      showRequiredOnly: false,
      schema: {},
      theme: 'barebones',
      refParser: true
    }, options)

    /**
     * Roots symbol used in paths
     * @type {string}
     * @private
     */
    this.rootName = '#'

    /**
     * Separator symbol used in paths
     * @type {string}
     * @private
     */
    this.pathSeparator = '/'

    /**
     * List of registered instances
     * @type {object}
     * @private
     */
    this.instances = {}

    /**
     * The root editor
     * @type {Instance}
     * @private
     */
    this.root = null

    /**
     * The Theme instance used to generate editors user interfaces
     * @type {Theme}
     * @private
     */
    this.theme = null

    /**
     * The Validator instance used to validate instance values
     * @type {Validator}
     * @private
     */
    this.validator = null

    /**
     * A json schema used
     * @type {*}
     * @private
     */
    this.schema = null

    /**
     * A RefParser instance
     * @type {RefParser}
     * @private
     */
    this.refParser = null

    this.init()
  }

  /**
   * Initializes instance properties
   * @private
   */
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
      this.container.appendChild(this.root.ui.control.container)
      this.container.classList.add('jedi-ready')
    }

    this.root.on('change', () => {
      this.emit('change')
    })
  }

  /**
   * Appends a hidden input to the root container who's value will be the value
   * of the root instance.
   * @private
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
   * @private
   */
  register (instance) {
    this.instances[instance.path] = instance
  }

  /**
   * Deletes a child instance pointer from the instances list
   * @private
   */
  unregister (instance) {
    this.instances[instance.path] = null
    delete this.instances[instance.path]
  }

  /**
   * Creates an json instance
   * @private
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

    if (isSet(config.schema.if()) || isSet(config.schema.anyOf()) || isSet(config.schema.oneOf()) || config.schema.typeIs('any') || isArray(config.schema.type()) || notSet(config.schema.type())) {
      if (notSet(config.schema.type()) && isSet(config.schema.default())) {
        const schemaClone = config.schema.clone()
        schemaClone.type = getType(config.schema.default())
        config.schema = schemaClone
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
   */
  setValue () {
    this.root.setValue(...arguments)
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
  getErrors () {
    let errors = []

    Object.keys(this.instances).forEach((key) => {
      const editor = this.instances[key]
      errors = [...errors, ...editor.getErrors()]
    })

    return errors
  }

  /**
   * Destroy the root instance and it's children
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
