import EventEmitter from '../event-emitter'
import ThemeWireframe from '../themes/wireframe'
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
    this.propertiesSlot = null
    this.controlSlot = null
    this.messagesSlot = null
    this.actionsSlot = null
    this.childrenSlot = null
    this.descriptionSlot = null
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
      case 'wireframe':
        this.theme = new ThemeWireframe()
        break
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

    this.container = this.theme.getContainer()
    this.propertiesSlot = this.theme.getPropertiesSlot({
      id: 'properties-slot-' + this.instance.path.replace('.', '-')
    })
    this.controlSlot = this.theme.getControlSlot()
    this.messagesSlot = this.theme.getMessagesSlot()
    this.actionsSlot = this.theme.getActionsSlot()
    this.childrenSlot = this.theme.getChildrenSlot()
    this.descriptionSlot = this.theme.getDescriptionSlot()
  }

  setContainerAttributes () {
    this.container.setAttribute('data-path', this.instance.path)

    if (isSet(this.instance.schema.type())) {
      this.container.setAttribute('data-type', this.instance.schema.type())
    }
  }

  build () {}

  refreshUI () {}

  /**
   * Shows validation messages in the editor container.
   */
  showValidationErrors () {
    const errors = this.instance.validate()

    this.messagesSlot.innerHTML = ''

    errors.forEach((error) => {
      const invalidFeedback = this.getInvalidFeedback(error.message)
      this.messagesSlot.appendChild(invalidFeedback)
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
