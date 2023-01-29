import InstanceResolver from './instance-resolver'
import Schema from './schema'
import Validator from './validator'
import RefParser from './ref-parser'
import EventEmitter from './event-emitter'

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
      theme: 'wireframe'
    }, options)

    this.container = document.querySelector(options.container)
    this.instances = {}
    this.root = null
    this.theme = null
    this.resolver = new InstanceResolver()
    this.validator = new Validator()
    this.refParser = new RefParser()
    this.schema = new Schema(options.schema)
    this.errors = []
    this.init()
    console.table(this.instances)
  }

  init () {
    this.refParser.dereference(this.schema.schema)

    this.root = this.createInstance({
      jedi: this,
      schema: this.schema
    })

    if (this.options.startValue) {
      this.root.setValue(this.options.startValue)
    }

    if (this.options.isEditor && this.container) {
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
    this.hiddenInput = this.root.ui.theme.getInput({
      type: 'hidden',
      id: 'jedi-hidden-input'
    })

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
    return this.resolver.resolve(config)
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
   * Returns a root child instance give it'S path
   * @return {*}
   */
  getEditor (path) {
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
    this.errors = []

    Object.keys(this.instances).forEach((key) => {
      const editor = this.instances[key]
      this.errors = [...this.errors, ...editor.validate()]
    })

    return this.errors
  }

  reset () {
    this.options.startValue = this.getValue()
    this.container.innerHTML = ''
    this.root.destroy()
    this.init()
  }

  setTheme (theme) {
    this.options.theme = theme
    this.reset()
  }

  /**
   * Destroy the root instance and it'S children
   */
  destroy () {
    this.root.destroy()

    this.container.innerHTML = ''

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Jedi
