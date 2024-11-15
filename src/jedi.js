import Validator from './validation/validator.js'
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
  isArray, isObject,
  isSet, mergeDeep,
  notSet
} from './helpers/utils.js'
import {
  getSchemaAllOf,
  getSchemaAnyOf,
  getSchemaIf,
  getSchemaOneOf,
  getSchemaType,
  getSchemaXOption
} from './helpers/schema.js'
import { bootstrapIcons, fontAwesome3, fontAwesome4, fontAwesome5, fontAwesome6, glyphicons } from './themes/icons/icons.js'
import UiResolver from './ui-resolver.js'

/**
 * Represents a Jedi instance.
 */
class Jedi extends EventEmitter {
  /**
   * Creates a Jedi instance.
   * @param {object} options - Options object
   * @param {object|boolean} options.schema - A JSON schema
   * @param {boolean} options.container - Where the UI controls will be rendered
   */
  constructor (options) {
    super()

    this.options = Object.assign({
      container: null,
      iconLib: null,
      theme: null,
      refParser: null,
      enablePropertiesToggle: false,
      enableCollapseToggle: false,
      startCollapsed: false,
      deactivateNonRequired: false,
      schema: {},
      showErrors: 'change',
      data: undefined,
      validateFormat: false,
      mergeAllOf: false,
      enforceConst: false,
      enforceEnumDefault: true,
      customEditors: [],
      hiddenInputAttributes: {}
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
     * @type {Jedi}
     */
    this.root = null

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

    this.theme = null

    this.uiResolver = null

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
    this.uiResolver = new UiResolver({
      customEditors: this.options.customEditors
    })

    this.theme = this.options.theme

    if (isSet(this.options.iconLib)) {
      switch (this.options.iconLib) {
        case 'glyphicons':
          this.theme.icons = glyphicons
          break
        case 'bootstrap-icons':
          this.theme.icons = bootstrapIcons
          break
        case 'fontawesome3':
          this.theme.icons = fontAwesome3
          break
        case 'fontawesome4':
          this.theme.icons = fontAwesome4
          break
        case 'fontawesome5':
          this.theme.icons = fontAwesome5
          break
        case 'fontawesome6':
          this.theme.icons = fontAwesome6
          break
      }
    }

    this.schema = this.options.schema
    this.validator = new Validator({ refParser: this.refParser, validateFormat: this.options.validateFormat })

    this.root = this.createInstance({
      jedi: this,
      schema: this.options.schema,
      path: this.rootName
    })

    if (isSet(this.options.data)) {
      this.root.setValue(this.options.data, false)
    }

    if (this.options.container) {
      this.container = this.options.container
      this.appendHiddenInput()
      this.container.appendChild(this.root.ui.control.container)
      this.container.classList.add('jedi-ready')
    }
  }

  bindEventListeners () {
    if (this.root) {
      this.root.on('change', () => {
        this.emit('change')
      })
    }

    if (this.hiddenInput) {
      this.on('change', () => {
        this.hiddenInput.value = JSON.stringify(this.getValue())
      })
    }
  }

  /**
   * Appends a hidden input to the root container whose value will be the value
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

    if (this.options.hiddenInputAttributes && isObject(this.options.hiddenInputAttributes)) {
      Object.keys(this.options.hiddenInputAttributes).forEach(attr => {
        this.hiddenInput.setAttribute(attr, this.options.hiddenInputAttributes[attr])
      })
    }

    this.container.appendChild(this.hiddenInput)
    this.hiddenInput.value = JSON.stringify(this.getValue())
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

    if (isSet(schemaAnyOf) || isSet(schemaOneOf) || schemaType === 'any' || isArray(schemaType) || notSet(schemaType)) {
      return new InstanceMultiple(config)
    }

    if (isSet(schemaIf)) {
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
      const instance = this.instances[key]
      errors = [...errors, ...instance.getErrors()]
    })

    return errors
  }

  /**
   * Displays validation errors in the respective editors.
   * If an errors list is passed, it will display these errors;
   * otherwise, it will retrieve existing errors from the instance.
   *
   * @param {Array|null} errorsList - An optional array containing error messages.
   * @returns {boolean} Returns `true` if the container exists and errors are displayed,
   * or `false` if there is no container and thus no errors are displayed.
   */
  showValidationErrors (errorsList = null) {
    if (!this.options.container) {
      return false
    }

    const errors = errorsList || this.getErrors()

    Object.keys(this.instances).forEach((key) => {
      const instance = this.instances[key]
      instance.ui.showValidationErrors(errors, true)
    })
  }

  /**
   * Destroy the root instance and it's children
   */
  destroy () {
    this.root.destroy()

    if (this.options.container) {
      this.container.innerHTML = ''
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Jedi
