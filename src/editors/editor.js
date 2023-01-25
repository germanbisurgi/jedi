import EventEmitter from '../event-emitter'
import ThemeWireframe from '../themes/wireframe'

class Editor extends EventEmitter {
  constructor (instance) {
    super()
    this.instance = instance
    this.theme = new ThemeWireframe()
    this.container = this.theme.getContainer()
    this.messagesSlot = this.theme.getMessagesSlot()
    this.actionsSlot = this.theme.getActionsSlot()
    this.childEditorsSlot = this.theme.getChildEditorsSlot()
    this.disabled = false
    this.build()
    this.setContainerAttributes()
    this.refreshUI()

    if (this.instance.jedi.ready || this.instance.jedi.options.alwaysShowErrors || this.instance.schema.option('alwaysShowErrors')) {
      this.showValidationErrors()
    }

    this.instance.on('set-value', () => {
      this.refreshUI()
    })

    this.instance.on('change', () => {
      this.showValidationErrors()
    })
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

    for (const key in this) {
      if (!Object.hasOwn(this, key)) {
        continue
      }

      delete this[key]
    }
  }
}

export default Editor
