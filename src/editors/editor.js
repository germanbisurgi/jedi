import EventEmitter from '../event-emitter'
import { glyphicons, bootstrapIcons, fontAwesome3, fontAwesome4, fontAwesome5, fontAwesome6 } from '../themes/icons/icons'
import ThemeBootstrap3 from '../themes/bootstrap3'
import ThemeBootstrap4 from '../themes/bootstrap4'
import ThemeBootstrap5 from '../themes/bootstrap5'
import Theme from '../themes/theme'
import { isSet } from '../helpers/utils'
import { getSchemaOption, getSchemaType } from '../helpers/schema'

/**
 * Represents an Editor instance.
 * @extends EventEmitter
 */
class Editor extends EventEmitter {
  constructor (instance) {
    super()

    /**
     * A reference to the Instance being controlled by this editor.
     * @type {Instance}
     * @private
     */
    this.instance = instance

    /**
     * Theme instance used to build the Editor user interface.
     * @type {Theme}
     * @private
     */
    this.theme = null

    /**
     * The user interface html for this editor
     * @type {HTMLElement}
     * @private
     */
    this.control = null

    /**
     * Disabled status for this editor user interface
     * @type {boolean}
     * @private
     */
    this.disabled = false

    /**
     * Read only status for this editor user interface
     * @type {boolean}
     * @private
     */
    this.readOnly = this.instance.isReadOnly()

    this.init()
    this.build()
    this.addEventListeners()
    this.setContainerAttributes()
    this.refreshUI()

    if (this.instance.jedi.options.alwaysShowErrors || getSchemaOption(this.instance.schema, 'alwaysShowErrors')) {
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    }

    this.instance.on('set-value', () => {
      this.refreshUI()
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    })

    this.instance.on('change', () => {
      this.refreshUI()
      const errors = this.instance.getErrors()
      this.showValidationErrors(errors)
    })
  }

  /**
   * Initializes the editor
   * @private
   */
  init () {
    let icons = null

    if (isSet(this.instance.jedi.options.iconLib)) {
      switch (this.instance.jedi.options.iconLib) {
        case 'glyphicons':
          icons = glyphicons
          break
        case 'bootstrap-icons':
          icons = bootstrapIcons
          break
        case 'font-awesome-3':
          icons = fontAwesome3
          break
        case 'font-awesome-4':
          icons = fontAwesome4
          break
        case 'font-awesome-5':
          icons = fontAwesome5
          break
        case 'font-awesome-6':
          icons = fontAwesome6
          break
      }
    }

    switch (this.instance.jedi.options.theme) {
      case 'bootstrap3':
        this.theme = new ThemeBootstrap3(icons)
        break
      case 'bootstrap4':
        this.theme = new ThemeBootstrap4(icons)
        break
      case 'bootstrap5':
        this.theme = new ThemeBootstrap5(icons)
        break
      default:
        this.theme = new Theme(icons)
    }
  }

  /**
   * Sets container attributes like data-path and data-type
   * @private
   */
  setContainerAttributes () {
    this.control.container.setAttribute('data-path', this.instance.path)

    const schemaType = getSchemaType(this.instance.schema)

    if (isSet(schemaType)) {
      this.control.container.setAttribute('data-type', schemaType)
    }
  }

  /**
   * Builds the editor control and appends it to the editor container
   * @private
   */
  build () {
  }

  /**
   * Add event listeners to ui elements
   * @private
   */
  addEventListeners () {
  }

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
   * Updates control UI when its state changes
   * @private
   */
  refreshUI () {
    this.refreshInteractiveElements()
  }

  refreshInteractiveElements () {
    const interactiveElements = this.control.container.querySelectorAll('button, input, select, textarea')

    interactiveElements.forEach((element) => {
      if (this.disabled || this.readOnly) {
        element.setAttribute('disabled', '')
      } else {
        element.removeAttribute('disabled', '')
      }
    })
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
