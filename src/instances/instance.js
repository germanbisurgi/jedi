import EventEmitter from '../event-emitter'
import {
  clone, equal,
  isSet, mergeDeep, notSet, removeDuplicatesFromArray
} from '../helpers/utils'
import {
  getSchemaDefault,
  getSchemaElse,
  getSchemaIf,
  getSchemaReadOnly,
  getSchemaThen,
  getSchemaType
} from '../helpers/schema'
import Jedi from '../jedi'

/**
 * Represents a JSON instance.
 */
class Instance extends EventEmitter {
  constructor (config) {
    super()

    /**
     * A reference to the Jedi instance to which this instance belongs.
     * @type {Jedi}
     * @private
     */
    this.jedi = config.jedi

    /**
     * The schema path of this instance.
     * @type {string}
     * @private
     */
    this.path = config.path || this.jedi.rootName

    /**
     * A JSON schema.
     * @type {boolean|object}
     * @private
     */
    this.originalSchema = config.schema

    /**
     * A JSON schema.
     * @type {boolean|object}
     * @private
     */
    this.schema = config.schema

    /**
     * The json value of this instance.
     * @type {*}
     * @private
     */
    this.value = isSet(config.value) ? config.value : undefined

    /**
     * The active state of this instance. If false the editor is not participating
     * in the value.
     * @type {boolean}
     * @private
     */
    this.isActive = true

    /**
     * The Parent instance of this instance.
     * @type {Instance|null}
     * @private
     */
    this.parent = config.parent || null

    /**
     * Child instances of this instance.
     * @type {Instance[]}
     * @private
     */
    this.children = []

    /**
     * The editor controlling this Instance if any
     * @type {Editor|null}
     * @private
     */
    this.ui = null

    this.init()
  }

  /**
   * Initializes and register the instance
   */
  init () {
    this.register()
    this.setInitialValue()
    this.prepare()
    this.setDefaultValue()

    if (this.jedi.options.isEditor) {
      this.setUI()
    }

    this.on('change', () => {
      if (this.parent) {
        this.parent.onChildChange()
      }

      // if (this.jedi?.options?.isEditor) {
      //   this.mutate()
      // }
    })
  }

  mutate () {
    if (!isSet(this.schema)) {
      return
    }

    const schemaIf = getSchemaIf(this.schema)

    if (isSet(schemaIf)) {
      this.unregister()
      const jedi = this.jedi
      const path = this.path
      const parent = this.parent
      const container = this.ui.control.container.parentNode
      const originalSchema = this.originalSchema
      const oldValue = clone(this.getValue())
      const schemaThen = getSchemaThen(this.schema)
      const schemaElse = getSchemaElse(this.schema)
      const ifEditor = new Jedi({ schema: schemaIf, data: oldValue })
      const valid = ifEditor.getErrors().length === 0
      ifEditor.destroy()

      const schemaDelta = valid ? schemaThen : schemaElse
      const newSchema = mergeDeep({}, originalSchema, schemaDelta)
      const schemaUnchanged = equal(originalSchema, newSchema)

      if (schemaUnchanged) {
        return
      }

      this.destroy()

      const newInstance = jedi.createInstance({
        jedi: jedi,
        schema: newSchema,
        path: path,
        parent: parent
      })

      newInstance.setValue(mergeDeep(newInstance.getValue(), oldValue), false)

      container.appendChild(newInstance.ui.control.container)
    }
  }

  /**
   * Sets the instance ui property. UI can be an editor instance or similar
   */
  setUI () {
  }

  /**
   * Return the last part of the instance path
   */
  getKey () {
    return this.path.split(this.jedi.pathSeparator).pop()
  }

  /**
   * Adds a child instance pointer to the instances list
   */
  register () {
    this.jedi.register(this)
  }

  /**
   * Deletes a child instance pointer from the instances list
   */
  unregister () {
    this.jedi.unregister(this)
  }

  /**
   * Sets the default value of the instance based on it's type
   */
  setInitialValue () {
    if (notSet(this.value)) {
      let value
      const schemaType = getSchemaType(this.schema)

      if (schemaType === 'boolean') value = false
      if (schemaType === 'number') value = 0.0
      if (schemaType === 'integer') value = 0
      if (schemaType === 'string') value = ''
      if (schemaType === 'array') value = []
      if (schemaType === 'object') value = {}
      if (schemaType === 'null') value = null

      this.value = value
    }
  }

  setDefaultValue () {
    const schemaDefault = getSchemaDefault(this.schema)

    if (isSet(schemaDefault)) {
      this.setValue(schemaDefault, false)
    }
  }

  /**
   * Returns the value of the instance
   */
  getValue () {
    return this.value
  }

  /**
   * Sets the instance value
   */
  setValue (newValue, triggersChange = true) {
    this.value = newValue
    this.emit('set-value')

    if (triggersChange) {
      this.emit('change')
    }
  }

  /**
   * Fires when a child's instance state changes
   */
  onChildChange () {
  }

  /**
   * Returns an array of validation error messages
   */
  getErrors () {
    if (!this.isActive) {
      return []
    }

    const errors = this.jedi.validator.getErrors(this.getValue(), this.schema, this.getKey(), this.path)

    return removeDuplicatesFromArray(errors)
  }

  /**
   * Prepare data before building the editor
   */
  prepare () {
  }

  /**
   * Activates the instance
   */
  activate () {
    if (this.isActive === false) {
      this.isActive = true
      this.emit('change')
    }
  }

  /**
   * Deactivates the instance
   */
  deactivate () {
    if (this.isActive === true) {
      this.isActive = false
      this.emit('change')
    }
  }

  /**
   * Returns true if this instance is read only
   */
  isReadOnly () {
    let readOnly = false

    if (getSchemaReadOnly(this.schema) === true) {
      readOnly = true
    }

    if (this.parent && getSchemaReadOnly(this.parent.schema) === true) {
      readOnly = true
    }

    return readOnly
  }

  /**
   * Destroy the instance and it's children
   */
  destroy () {
    this.listeners = []

    this.children.forEach((child) => {
      child.destroy()
    })

    this.unregister()

    if (this.ui) {
      this.ui.destroy()
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })

    super.destroy()
  }
}

export default Instance
