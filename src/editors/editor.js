import { combineDeep, compileTemplate, isObject, isSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaEnum, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an Editor instance.
 * @extends EventEmitter
 */
class Editor {
  constructor (instance) {
    /**
     * A reference to the Instance being controlled by this editor.
     * @type {Jedi}
     */
    this.instance = instance

    /**
     * Theme instance used to build the Editor user interface.
     * @type {Theme}
     */
    this.theme = null

    /**
     * The user interface html for this editor
     * @type {HTMLElement}
     */
    this.control = null

    /**
     * Disabled status for this editor user interface
     * @type {boolean}
     */
    this.disabled = false

    /**
     * Read only status for this editor user interface
     * @type {boolean}
     */
    this.readOnly = this.instance.isReadOnly()

    this.showingValidationErrors = false

    this.init()
    this.build()
    this.setAttributes()
    this.enforceEnumDefault()
    this.addEventListeners()
    this.setContainerAttributes()
    this.refreshUI()

    const alwaysShowErrors = this.instance.jedi.options.showErrors === 'always' || getSchemaXOption(this.instance.schema, 'showErrors') === 'always'

    if (alwaysShowErrors) {
      this.showValidationErrors(this.instance.getErrors())
    }

    this.instance.on('set-value', () => {
      this.refreshUI()
      this.showValidationErrors(this.instance.getErrors())
    })

    this.instance.on('change', () => {
      this.refreshUI()
      this.showValidationErrors(this.instance.getErrors())
    })
  }

  static resolves (schema) {}

  /**
   * Initializes the editor
   */
  init () {
    this.theme = this.instance.jedi.theme
  }

  /**
   * Sets container attributes like data-path and data-type
   */
  setContainerAttributes () {
    this.control.container.setAttribute('data-path', this.instance.path)
    this.control.container.setAttribute('data-type', getSchemaType(this.instance.schema))
  }

  /**
   * Builds the editor control and appends it to the editor container
   */
  build () {
  }

  adaptForTable () {}

  /**
   * Adds attributes to generated html elements if specified in schema x-options
   */
  setAttributes () {
    const input = this.control.input

    if (isSet(input)) {
      const inputAttributes = getSchemaXOption(this.instance.schema, 'inputAttributes')

      if (isObject(inputAttributes)) {
        for (const [key, value] of Object.entries(inputAttributes)) {
          input.setAttribute(key, value)
        }
      }
    }
  }

  getIdFromPath (path) {
    const optionId = this.instance.jedi.options.id
    return optionId ? optionId + '-' + pathToAttribute(path) : pathToAttribute(path)
  }

  /**
   * Updates the value of the instance by making assumptions based on constrains
   */
  enforceEnumDefault () {
    const enforceEnumDefault = getSchemaXOption(this.instance.schema, 'enforceEnumDefault') ?? this.instance.jedi.options.enforceEnumDefault
    const schemaEnum = getSchemaEnum(this.instance.schema)

    if (isSet(schemaEnum) && !schemaEnum.includes(this.instance.getValue()) && isSet(schemaEnum[0]) && enforceEnumDefault) {
      this.instance.setValue(schemaEnum[0], false)
    }
  }

  /**
   * Add event listeners to ui elements
   */
  addEventListeners () {
  }

  /**
   * Shows validation messages in the editor container.
   */
  showValidationErrors (errors, force = false) {
    errors = errors.filter((error) => {
      return error.path === this.instance.path
    })

    this.control.messages.innerHTML = ''
    this.showingValidationErrors = false

    const neverShowErrors = this.instance.jedi.options.showErrors === 'never' || getSchemaXOption(this.instance.schema, 'showErrors') === 'never'

    if ((neverShowErrors && !force) || errors.length === 0) {
      return
    }

    errors.forEach((error) => {
      if (error.constraint === 'properties') {
        return
      }

      error.messages.forEach((message) => {
        const invalidFeedback = this.getInvalidFeedback({
          message: message
        })

        this.control.messages.appendChild(invalidFeedback)
      })
    })

    this.showingValidationErrors = true
  }

  /**
   * Get an error message container
   */
  getInvalidFeedback (config) {
    return this.theme.getInvalidFeedback(config)
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
   * Clean out HTML tags from txt
   */
  purifyContent (content, domPurifyOptions) {
    if (window.DOMPurify) {
      return window.DOMPurify.sanitize(content, domPurifyOptions)
    } else {
      const tmp = document.createElement('div')
      tmp.innerHTML = content
      return (tmp.textContent || tmp.innerText)
    }
  }

  getHtmlFromMarkdown (content) {
    if (this.instance.jedi.options.parseMarkdown && window.marked) {
      return window.marked.parse(content)
    }

    return content
  }

  getTitle () {
    let title = this.instance.getKey()
    const schemaTitle = getSchemaTitle(this.instance.schema)

    if (isSet(schemaTitle)) {
      title = compileTemplate(schemaTitle, {
        value: this.instance.getValue(),
        params: this.instance.jedi.options.params
      })

      title = this.getHtmlFromMarkdown(title)

      const domPurifyOptions = combineDeep({}, this.instance.jedi.options.domPurifyOptions, {
        FORBID_TAGS: ['p']
      })

      title = this.purifyContent(title, domPurifyOptions)
    }

    return title
  }

  getDescription () {
    let schemaDescription = getSchemaDescription(this.instance.schema)

    if (isSet(schemaDescription)) {
      schemaDescription = compileTemplate(schemaDescription, {
        value: this.instance.getValue(),
        params: this.instance.jedi.options.params
      })

      schemaDescription = this.getHtmlFromMarkdown(schemaDescription)

      const domPurifyOptions = this.instance.jedi.options.domPurifyOptions

      this.purifyContent(schemaDescription, domPurifyOptions)
    }

    return schemaDescription
  }

  /**
   * Updates control UI when its state changes
   */
  refreshUI () {
    this.refreshDisabledState()
    this.refreshTemplates()
  }

  refreshDisabledState () {
    const interactiveElements = this.control.container.querySelectorAll('button, input, select, textarea')

    interactiveElements.forEach((element) => {
      if (this.disabled || this.readOnly || element.hasAttribute('always-disabled')) {
        element.setAttribute('disabled', '')
      } else {
        element.removeAttribute('disabled', '')
      }

      if (element.hasAttribute('always-enabled')) {
        element.removeAttribute('disabled', '')
      }
    })
  }

  refreshTemplates () {
    if (this.control.legendText && this.getTitle()) {
      this.control.legendText.innerHTML = this.getTitle()
    }

    if (this.control.labelText && this.getTitle()) {
      this.control.labelText.innerHTML = this.getTitle()
    }

    if (this.control.description && this.getDescription()) {
      this.control.description.innerHTML = this.getDescription()
    }
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
    if (this.control.container && this.control.container.parentNode) {
      this.control.container.parentNode.removeChild(this.control.container)
    }

    Object.keys(this).forEach((key) => {
      delete this[key]
    })
  }
}

export default Editor
