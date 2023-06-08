import EventEmitter from '../event-emitter'
import ThemeBootstrap3 from '../themes/bootstrap3'
import ThemeBootstrap4 from '../themes/bootstrap4'
import ThemeBootstrap5 from '../themes/bootstrap5'
import ThemeBarebones from '../themes/barebones'
import { isSet } from '../utils'

class Editor extends EventEmitter {
  constructor (instance) {
    super()
    this.instance = instance
    this.theme = null
    this.container = null
    this.control = null
    this.disabled = false
    this.init()
    this.build()
    this.setContainerAttributes()
    this.refreshUI()

    if (this.instance.jedi.options.alwaysShowErrors || this.instance.schema.option('alwaysShowErrors')) {
      this.showValidationErrors()
    }

    this.instance.on('set-value', () => {
      this.refreshUI()
      this.showValidationErrors()
    })

    this.instance.on('change', () => {
      this.showValidationErrors()
    })
  }

  init () {
    switch (this.instance.jedi.options.theme) {
      case 'bootstrap3':
        this.theme = new ThemeBootstrap3()
        break
      case 'bootstrap4':
        this.theme = new ThemeBootstrap4()
        break
      case 'bootstrap5':
        this.theme = new ThemeBootstrap5()
        break
      case 'barebones':
        this.theme = new ThemeBarebones()
        break
      default:
        this.theme = new ThemeBarebones()
    }

    this.container = this.theme.getEditorContainer()
  }

  /**
   * Sets container attributes like data-path and data-type
   */
  setContainerAttributes () {
    this.container.setAttribute('data-path', this.instance.path)

    if (isSet(this.instance.schema.type())) {
      this.container.setAttribute('data-type', this.instance.schema.type())
    }
  }

  /**
   * Builds the editor control and appends it to the editor container
   */
  build () {}

  /**
   * Updates control UI when its state changes
   */
  refreshUI () {}

  /**
   * Shows validation messages in the editor container.
   */
  showValidationErrors () {
    const errors = this.instance.getErrors()

    this.control.messages.innerHTML = ''

    errors.forEach((error) => {
      const invalidFeedback = this.getInvalidFeedback(error.message)
      this.control.messages.appendChild(invalidFeedback)
    })
  }

  getInvalidFeedback (message) {
    return this.theme.getInvalidFeedback({
      message: message
    })
  }

  /**
   * Disables the editor
   */
  disable () {
    this.disabled = true
    this.refreshUI()
  }

  /**
   * Enables the editor
   */
  enable () {
    this.disabled = false
    this.refreshUI()
  }

  /**
   * Transforms the input value if necessary before value set
   */
  sanitize (value) {
    return value
  }

  /**
   * Destroys the editor
   */
  destroy () {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container)
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Editor
