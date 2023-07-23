import EventEmitter from '../event-emitter'
import ThemeBootstrap3 from '../themes/bootstrap3'
import ThemeBootstrap4 from '../themes/bootstrap4'
import ThemeBootstrap5 from '../themes/bootstrap5'
import Theme from '../themes/barebones'
import { isSet } from '../utils'

/**
 * Represents an Editor instance.
 * @extends EventEmitter
 */
class Editor extends EventEmitter {
  constructor (instance) {
    super()
    this.instance = instance
    this.theme = null
    this.control = null
    this.disabled = false
    this.init()
    this.build()
    this.setContainerAttributes()
    this.refreshUI()

    if (this.instance.jedi.options.alwaysShowErrors || this.instance.schema.option('alwaysShowErrors')) {
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    }

    this.instance.on('set-value', () => {
      this.refreshUI()
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    })

    this.instance.on('change', () => {
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    })
  }

  /**
   * Initializes the editor
   * @private
   */
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
        this.theme = new Theme()
        break
      default:
        this.theme = new Theme()
    }
  }

  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes () {
    this.control.container.setAttribute('data-path', this.instance.path)

    if (isSet(this.instance.schema.type())) {
      this.control.container.setAttribute('data-type', this.instance.schema.type())
    }
  }

  /**
   * Builds the editor control and appends it to the editor container
   * @private
   */
  build () {}

  /**
   * Updates control UI when its state changes
   * @private
   */
  refreshUI () {}

  /**
   * Shows validation messages in the editor container.
   * @private
   */
  showValidationErrors (errors) {
    this.control.messages.innerHTML = ''

    errors.forEach((error) => {
      error.messages.forEach((message) => {
        const invalidFeedback = this.getInvalidFeedback(message)
        this.control.messages.appendChild(invalidFeedback)
      })
    })
  }

  /**
   * Get an error message container
   * @private
   */
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
   * @private
   */
  sanitize (value) {
    return value
  }

  /**
   * Destroys the editor
   * @private
   */
  destroy () {
    if (this.control.container && this.control.container.parentNode) {
      this.control.container.parentNode.removeChild(this.control.container)
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Editor
