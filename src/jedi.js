import Validator from './validation/validator'
import EventEmitter from './event-emitter'
import InstanceMultiple from './instances/multiple'
import InstanceBoolean from './instances/boolean'
import InstanceObject from './instances/object'
import InstanceArray from './instances/array'
import InstanceString from './instances/string'
import InstanceNumber from './instances/number'
import InstanceNull from './instances/null'
import RefParser from './ref-parser/ref-parser'
import { isArray, isSet, notSet } from './helpers/utils'
import {
  getSchemaAnyOf,
  getSchemaOneOf,
  getSchemaType
} from './helpers/schema'

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
      schema: {},
      showErrors: 'change',
      data: undefined,
      XMLHttpRequest: undefined
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
    this.schema = this.options.schema
    this.validator = new Validator()
    this.refParser = new RefParser({ XMLHttpRequest: this.options.XMLHttpRequest })
    this.refParser.dereference(this.options.schema)

    this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema
    })

    if (isSet(this.options.data)) {
      this.root.setValue(this.options.data, false)
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
    this.hiddenInput.removeAttribute('aria-describedby')

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
   * Creates a json instance and dereference schema on the fly if needed.
   * @private
   */
  createInstance (config) {
    config.schema = this.refParser.expand(config.schema)
    const schemaType = getSchemaType(config.schema)
    const schemaOneOf = getSchemaOneOf(config.schema)
    const schemaAnyOf = getSchemaAnyOf(config.schema)

    if (isSet(schemaAnyOf) || isSet(schemaOneOf) || schemaType === 'any' || isArray(schemaType) || notSet(schemaType)) {
      return new InstanceMultiple(config)
    }

    if (schemaType === 'object') {
      return new InstanceObject(config)
    }

    if (schemaType === 'array') {
      return new InstanceArray(config)
    }

    if (schemaType === 'string') {
      return new InstanceString(config)
    }

    if (schemaType === 'number' || schemaType === 'integer') {
      return new InstanceNumber(config)
    }

    if (schemaType === 'boolean') {
      return new InstanceBoolean(config)
    }

    if (schemaType === 'null') {
      return new InstanceNull(config)
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
