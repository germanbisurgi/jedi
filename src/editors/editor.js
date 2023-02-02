import EventEmitter from '../event-emitter'
import ThemeWireframe from '../themes/wireframe'
import ThemeBootstrap4 from '../themes/bootstrap4'
import ThemeBootstrap5 from '../themes/bootstrap5'
import ThemeBarebones from '../themes/barebones'

class Editor extends EventEmitter {
  constructor (instance) {
    super()
    this.instance = instance
    this.theme = null
    this.container = null
    this.activatorsSlot = null
    this.controlSlot = null
    this.messagesSlot = null
    this.actionsSlot = null
    this.childrenSlot = null
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
    this.activatorsSlot = this.theme.getActivatorsSlot()
    this.controlSlot = this.theme.getControlSlot()
    this.messagesSlot = this.theme.getMessagesSlot()
    this.actionsSlot = this.theme.getActionsSlot()
    this.childrenSlot = this.theme.getChildrenSlot()
  }

  setContainerAttributes () {
    this.container.setAttribute('data-path', this.instance.path)

    if (this.instance.schema.type()) {
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
      this.messagesSlot.appendChild(this.theme.getInputError({
        message: error.message
      }))
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
