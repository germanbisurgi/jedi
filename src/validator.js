import SchemaValidator from './validation/validator.js'
import EventEmitter from './event-emitter.js'
import InstanceIfThenElse from './instances/if-then-else.js'
import InstanceMultiple from './instances/multiple.js'
import InstanceBoolean from './instances/boolean.js'
import InstanceObject from './instances/object.js'
import InstanceArray from './instances/array.js'
import InstanceString from './instances/string.js'
import InstanceNumber from './instances/number.js'
import InstanceNull from './instances/null.js'
import {
  isArray,
  isSet, mergeDeep,
  notSet
} from './helpers/utils.js'
import {
  getSchemaAllOf,
  getSchemaAnyOf,
  getSchemaElse,
  getSchemaIf,
  getSchemaOneOf,
  getSchemaThen,
  getSchemaType,
  getSchemaXOption
} from './helpers/schema.js'

/**
 * Represents a Jedi instance.
 */
class Validator extends EventEmitter {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   * @param {string} options.theme - How the UI controls will be rendered
   */
  constructor (options) {
    super()

    this.options = Object.assign({
      refParser: null,
      schema: {},
      data: undefined,
      validateFormat: false,
      mergeAllOf: false
    }, options)

    /**
     * Roots symbol used in paths
     * @type {string}
     */
    this.rootName = '#'

    /**
     * Separator symbol used in paths
     * @type {string}
     */
    this.pathSeparator = '/'

    /**
     * List of registered instances
     * @type {object}
     */
    this.instances = {}

    /**
     * The root editor
     * @type {Instance}
     */
    this.root = null

    /**
     * The Theme instance used to generate editors user interfaces
     * @type {Theme}
     */
    this.theme = null

    /**
     * The Validator instance used to validate instance values
     * @type {Validator}
     */
    this.validator = null

    /**
     * A json schema used
     * @type {*}
     */
    this.schema = {}

    /**
     * A RefParser instance
     * @type {RefParser}
     */
    this.refParser = this.options.refParser ? this.options.refParser : null

    this.init()
    this.bindEventListeners()
  }

  /**
   * Initializes instance properties
   */
  init () {
    this.schema = this.options.schema
    this.validator = new SchemaValidator({ refParser: this.refParser, validateFormat: this.options.validateFormat })

    this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    })

    if (isSet(this.options.data)) {
      this.root.setValue(this.options.data, false)
    }
  }

  bindEventListeners () {
    if (this.root) {
      this.root.on('change', () => {
        this.emit('change')
      })
    }
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
   * Creates a json instance and dereference schema on the fly if needed.
   */
  createInstance (config) {
    const mergeAllOf = this.options.mergeAllOf || getSchemaXOption(config.schema, 'mergeAllOf')

    if (mergeAllOf) {
      const allOf = getSchemaAllOf(config.schema)

      if (isSet(allOf)) {
        allOf.forEach((subschema) => {
          config.schema = mergeDeep({}, config.schema, subschema)
        })
      }
    }

    if (this.refParser) {
      config.schema = this.refParser.expand(config.schema, config.path)
    }

    const schemaType = getSchemaType(config.schema)
    const schemaOneOf = getSchemaOneOf(config.schema)
    const schemaAnyOf = getSchemaAnyOf(config.schema)
    const schemaIf = getSchemaIf(config.schema)
    const schemaThen = getSchemaThen(config.schema)
    const schemaElse = getSchemaElse(config.schema)

    if (isSet(schemaAnyOf) || isSet(schemaOneOf) || schemaType === 'any' || isArray(schemaType) || notSet(schemaType)) {
      return new InstanceMultiple(config)
    }

    if (isSet(schemaIf) && (isSet(schemaThen) || isSet(schemaElse))) {
      return new InstanceIfThenElse(config)
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
   * Returns an instance by path
   * @return {*}
   */
  getInstance (path) {
    return this.instances[path]
  }

  /**
   * Returns an array of validation error messages
   */
  getErrors () {
    let errors = []

    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key]
      errors = [...errors, ...instance.getErrors()]
    })

    return errors
  }

  /**
   * Destroy the root instance and it's children
   */
  destroy () {
    this.root.destroy()

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Validator
