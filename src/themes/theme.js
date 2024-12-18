import { generateRandomID, isObject, isSet, isString } from '../helpers/utils.js'

/**
 * Represents a Theme instance.
 */
class Theme {
  constructor (icons = null) {
    this.icons = icons
    this.useToggleEvents = true
    const span = document.querySelector('span')
    this.defaultFontSize = window.getComputedStyle(span).fontSize
    this.init()
  }

  /**
   * Inits some instance properties
   */
  init () {
    this.useToggleEvents = true
  }

  /**
   * Used to wrap the editor UI elements
   */
  getEditorContainer () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-container')
    return html
  }

  /**
   * Used to group several controls
   */
  getFieldset () {
    const html = document.createElement('fieldset')
    html.classList.add('jedi-editor-fieldset')
    return html
  }

  /**
   * Represents a caption for the content of its parent fieldset
   */
  getLegend (config) {
    const legend = document.createElement('legend')
    const legendText = document.createElement('span')
    legend.classList.add('jedi-editor-legend')
    legendText.classList.add('jedi-editor-legend-text')
    legend.setAttribute('aria-labelledby', '#legend-' + config.id)
    legendText.innerHTML = this.purifyContent(config.textContent)
    legendText.setAttribute('id', '#legend-' + config.id)
    legend.appendChild(legendText)
    return { legend, legendText }
  }

  /**
   * Used to group several controls
   */
  getRadioFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('jedi-editor-radio-fieldset')
    fieldset.style.marginBottom = '15px'
    return fieldset
  }

  /**
   * Represents a caption for the content of its parent fieldset
   */
  getRadioLegend (config) {
    const legend = document.createElement('legend')
    const legendText = document.createElement('span')
    legend.classList.add('jedi-editor-legend')
    legendText.classList.add('jedi-editor-legend-text')
    legend.setAttribute('aria-labelledby', '#legend-' + config.id)
    legendText.innerHTML = this.purifyContent(config.textContent)
    legendText.setAttribute('id', '#legend-' + config.id)
    legend.appendChild(legendText)
    return { legend, legendText }
  }

  /**
   * Represents a caption for the content of its parent fieldset
   */
  getLabel (config) {
    const label = document.createElement('label')
    const labelText = document.createElement('span')
    const icon = this.getIcon(config.labelIconClass)

    label.setAttribute('for', config.for)
    labelText.innerHTML = this.purifyContent(config.text)
    label.classList.add('jedi-title')

    if (config.visuallyHidden) {
      this.visuallyHidden(label)
    }

    label.appendChild(icon)
    label.appendChild(labelText)

    return { label, labelText, icon }
  }

  getFakeLabel (config) {
    const label = document.createElement('span')
    const labelText = document.createElement('span')
    const icon = this.getIcon(config.labelIconClass)

    labelText.innerHTML = this.purifyContent(config.text)
    label.classList.add('jedi-title')

    if (config.visuallyHidden) {
      this.visuallyHidden(label)
    }

    label.appendChild(icon)
    label.appendChild(labelText)

    return { label, labelText, icon }
  }

  /**
   * Returns a icon element
   */
  getIcon (classes = '') {
    const icon = document.createElement('i')
    let iconClasses = classes.split(' ')
    iconClasses = iconClasses.filter((className) => className.length > 0)

    if (iconClasses) {
      iconClasses.forEach((className) => {
        icon.classList.add(className)
      })
    }

    return icon
  }

  /**
   * Container for complex editors like arrays, objects and multiple
   */
  getCard () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-card')
    return html
  }

  /**
   * Header for cards
   */
  getCardHeader () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-card-header')
    return html
  }

  /**
   * A body for the cards
   */
  getCardBody () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-card-body')
    return html
  }

  /**
   * Wrapper for editor actions buttons
   */
  getActionsSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-actions-slot')
    return html
  }

  /**
   * Wrapper for editor array specific actions buttons
   */
  getArrayActionsSlot () {
    const html = document.createElement('span')
    html.classList.add('jedi-array-actions-slot')
    return html
  }

  /**
   * Wrapper for child editors
   */
  getChildrenSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-children-slot')
    return html
  }

  /**
   * Wrapper for error messages
   */
  getMessagesSlot (config = {}) {
    const html = document.createElement('div')
    html.classList.add('jedi-messages-slot')
    html.setAttribute('aria-atomic', 'false')
    html.setAttribute('aria-live', 'polite')

    if (config.id) {
      html.setAttribute('id', config.id)
    }

    return html
  }

  /**
   * Wrapper for editor controls
   */
  getControlSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-control-slot')
    return html
  }

  /**
   * Toggles the ObjectEditor properties wrapper visibility
   */
  getPropertiesToggle (config) {
    const toggle = this.getButton(config)
    toggle.classList.add('jedi-properties-toggle')

    // if (this.useToggleEvents) {
    toggle.addEventListener('click', () => {
      if (config.propertiesContainer.open) {
        config.propertiesContainer.close()
      } else {
        config.propertiesContainer.showModal()
      }
    })
    // }

    return toggle
  }

  /**
   * Container that will collapse and expand to show and hide it contents
   */
  getCollapse (config) {
    const collapse = document.createElement('div')
    collapse.classList.add('jedi-collapse')
    collapse.setAttribute('id', config.id)

    if (this.useToggleEvents && config.startCollapsed) {
      collapse.style.display = 'none'
    }

    return collapse
  }

  /**
   * Toggle button for collapse
   */
  getCollapseToggle (config) {
    const toggle = this.getButton(config)
    toggle.classList.add('jedi-collapse-toggle')

    if (this.useToggleEvents) {
      toggle.addEventListener('click', () => {
        if (config.collapse.style.display === 'none') {
          config.collapse.style.display = 'block'
        } else {
          config.collapse.style.display = 'none'
        }
      })
    }

    let collapsed = config.startCollapsed

    toggle.style.transition = 'transform 0.1s ease'

    if (collapsed) {
      toggle.style.transform = 'rotate(90deg)'
    }

    toggle.addEventListener('click', () => {
      if (collapsed) {
        toggle.style.transform = 'rotate(0deg)'
      } else {
        toggle.style.transform = 'rotate(90deg)'
      }

      collapsed = !collapsed
    })

    return toggle
  }

  /**
   * Container for properties editing elements like property activators
   */
  getPropertiesSlot (config) {
    const html = document.createElement('dialog')
    html.classList.add('jedi-properties-slot')
    html.setAttribute('id', config.id)

    window.addEventListener('click', (event) => {
      if (event.target === html) {
        html.close()
      }
    })

    return html
  }

  /**
   * Container for screen reader announced messages
   */
  getPropertiesAriaLive () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-aria-live')
    html.setAttribute('role', 'status')
    html.setAttribute('aria-live', 'polite')
    return html
  }

  /**
   * A message that will be announced by screen reader
   */
  getAriaLiveMessage (message) {
    const html = document.createElement('p')
    html.classList.add('jedi-aria-live-message')
    html.textContent = message
    this.visuallyHidden(html)
    return html
  }

  /**
   * Wrapper for property activators
   */
  getPropertiesActivators () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-activators')
    return html
  }

  /**
   * Wrapper buttons
   */
  getBtnGroup () {
    const html = document.createElement('span')
    html.classList.add('jedi-btn-group')
    return html
  }

  /**
   * A button
   */
  getButton (config) {
    const button = document.createElement('button')
    button.classList.add('jedi-btn')

    button.setAttribute('type', 'button')

    if (config.value) {
      button.value = config.value
    }

    if (config.id) {
      button.setAttribute('id', config.id)
    }

    const text = document.createElement('span')
    text.textContent = config.textContent

    if (this.icons && config.icon) {
      const icon = this.getIcon(this.icons[config.icon])
      icon.setAttribute('title', config.textContent)
      button.appendChild(icon)
      this.visuallyHidden(text)
    }

    button.appendChild(text)

    return button
  }

  /**
   * Array "add" item button
   */
  getArrayBtnAdd () {
    const html = this.getButton({
      textContent: 'Add item',
      icon: 'add'
    })
    html.classList.add('jedi-array-add')
    return html
  }

  getAddPropertyButton () {
    const html = this.getButton({
      textContent: 'Add property'
    })
    html.classList.add('jedi-add-property-btn')
    return html
  }

  /**
   * Array "delete" item button
   */
  getDeleteItemBtn () {
    const deleteItemBtn = this.getButton({
      textContent: 'Delete item',
      icon: 'delete'
    })

    deleteItemBtn.classList.add('jedi-array-delete')

    return deleteItemBtn
  }

  /**
   * Array "move up" item button
   */
  getMoveUpItemBtn () {
    const moveUpItemBtn = this.getButton({
      textContent: 'Move up',
      icon: 'moveUp'
    })

    moveUpItemBtn.classList.add('jedi-array-move-up')

    return moveUpItemBtn
  }

  /**
   * Array "move down" item button
   */
  getMoveDownItemBtn () {
    const moveDownItemBtn = this.getButton({
      textContent: 'Move down',
      icon: 'moveDown'
    })

    moveDownItemBtn.classList.add('jedi-array-move-down')

    return moveDownItemBtn
  }

  getDragItemBtn () {
    const dragItemBtn = this.getButton({
      textContent: 'Drag',
      icon: 'drag'
    })

    dragItemBtn.classList.add('jedi-array-drag')

    return dragItemBtn
  }

  /**
   * Wrapper for the editor description
   */
  getDescription (config = {}) {
    const description = document.createElement('small')
    description.style.display = 'block'
    description.classList.add('jedi-description')

    if (config.content) {
      description.innerHTML = this.purifyContent(config.content)
    }

    if (config.id) {
      description.setAttribute('id', config.id)
    }

    return description
  }

  /**
   * Info button to display extra information
   */
  getInfoButton (config = {}) {
    const container = document.createElement('span')
    const infoButton = document.createElement('a')
    const infoButtonText = document.createElement('span')

    infoButton.setAttribute('href', '#')
    container.classList.add('jedi-info-button-container')
    infoButton.classList.add('jedi-info-button')
    container.style.display = 'inline-block'
    infoButton.style.marginLeft = '4px'
    infoButtonText.textContent = 'More information'

    this.visuallyHidden(infoButtonText)

    if (isObject(config.attributes)) {
      for (const [key, value] of Object.entries(config.attributes)) {
        infoButton.setAttribute(key, value)
      }
    }

    if (this.icons) {
      const icon = this.getIcon(this.icons['infoButton'])
      icon.setAttribute('title', 'More information')
      infoButton.appendChild(icon)
    }

    infoButton.appendChild(infoButtonText)
    container.appendChild(infoButton)

    return { container, infoButton }
  }

  /**
   * Dialog or modal that contains extra information about the control
   */
  infoButtonAsModal (infoButton, id, config = {}) {
    const dialog = document.createElement('dialog')
    const title = document.createElement('div')
    const content = document.createElement('div')
    const closeBtn = this.getButton({
      textContent: 'Close',
      icon: 'close'
    })

    dialog.classList.add('jedi-modal-dialog')
    title.classList.add('jedi-modal-title')
    content.classList.add('jedi-modal-content')
    closeBtn.classList.add('jedi-modal-close')

    infoButton.container.appendChild(dialog)
    dialog.appendChild(title)
    dialog.appendChild(content)
    dialog.appendChild(closeBtn)

    window.addEventListener('click', (event) => {
      if (event.target === dialog) {
        dialog.close()
      }
    })

    closeBtn.addEventListener('click', () => {
      dialog.close()
    })

    infoButton.infoButton.addEventListener('click', () => {
      dialog.showModal()
    })

    if (isString(config.title)) {
      title.innerHTML = this.purifyContent(config.title)
    }

    if (isString(config.content)) {
      content.innerHTML = this.purifyContent(config.content)
    }
  }

  /**
   * Clean out HTML tags from txt
   */
  purifyContent (content) {
    if (window.DOMPurify) {
      const clean = window.DOMPurify.sanitize(content)

      if (window.DOMPurify.removed.length) {
        console.warn('DOMPurify removed the following elements:', window.DOMPurify.removed)
      }

      return clean
    } else {
      const tmp = document.createElement('div')
      tmp.innerHTML = content
      return (tmp.textContent || tmp.innerText)
    }
  }

  getPlaceholderControl (config) {
    const container = document.createElement('div')
    const placeholder = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    container.appendChild(label)

    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container)
    }

    container.appendChild(placeholder)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, placeholder, label, labelText, description, messages, actions, arrayActions }
  }

  /**
   * Object control is a card containing multiple editors.
   * Each editor is mapped to an object instance property.
   * Properties can be added, activated and deactivated depending on configuration
   */
  getObjectControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const body = this.getCardBody()
    const ariaLive = this.getPropertiesAriaLive()

    const description = this.getDescription({
      content: config.description
    })

    const messages = this.getMessagesSlot()
    const childrenSlot = this.getChildrenSlot()

    const propertiesContainer = this.getPropertiesSlot({
      id: 'properties-slot-' + config.id
    })

    const propertiesToggle = this.getPropertiesToggle({
      textContent: config.title + ' ' + 'properties',
      id: 'properties-slot-toggle-' + config.id,
      icon: 'properties',
      propertiesContainer: propertiesContainer
    })

    const collapseId = 'collapse-' + config.id

    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    })

    const collapseToggle = this.getCollapseToggle({
      textContent: config.title + ' ' + 'properties',
      id: 'collapse-toggle-' + config.id,
      icon: 'collapse',
      collapseId: collapseId,
      collapse: collapse,
      startCollapsed: config.startCollapsed
    })

    const propertiesActivators = this.getPropertiesActivators()

    const addPropertyControl = this.getInputControl({
      type: 'text',
      id: 'jedi-add-property-input-' + config.id,
      label: 'Property'
    })

    const addPropertyBtn = this.getAddPropertyButton()

    const fieldset = this.getFieldset()
    const { legend, legendText } = this.getLegend({
      textContent: config.title,
      id: config.id
    })

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    addPropertyBtn.classList.add('jedi-object-add')

    container.appendChild(fieldset)
    container.appendChild(propertiesContainer)
    fieldset.appendChild(legend)

    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container)
    }

    fieldset.appendChild(collapse)
    collapse.appendChild(body)

    if (config.description) {
      body.appendChild(description)
    }

    body.appendChild(messages)

    if (config.readOnly === false) {
      legend.appendChild(actions)
    }

    actions.appendChild(arrayActions)
    body.appendChild(childrenSlot)

    if (config.addProperty) {
      propertiesContainer.appendChild(addPropertyControl.container)
      propertiesContainer.appendChild(addPropertyBtn)
      propertiesContainer.appendChild(document.createElement('hr'))
    }

    if (config.enablePropertiesToggle) {
      actions.appendChild(propertiesToggle)
      propertiesContainer.appendChild(ariaLive)
      propertiesContainer.appendChild(propertiesActivators)
    }

    if (config.enableCollapseToggle) {
      actions.appendChild(collapseToggle)
    }

    return {
      container,
      collapse,
      collapseToggle,
      body,
      actions,
      messages,
      childrenSlot,
      propertiesToggle,
      propertiesContainer,
      addPropertyControl,
      addPropertyBtn,
      ariaLive,
      propertiesActivators,
      arrayActions
    }
  }

  /**
   * Array control is a card containing multiple editors.
   * Items can bve added, deleted or moved up or down.
   */
  getArrayControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const body = this.getCardBody()

    const description = this.getDescription({
      content: config.description
    })

    const messages = this.getMessagesSlot()
    const childrenSlot = this.getChildrenSlot()
    const btnGroup = this.getBtnGroup()
    const addBtn = this.getArrayBtnAdd()
    const fieldset = this.getFieldset()
    const { legend, legendText } = this.getLegend({
      textContent: config.title,
      id: config.id
    })

    const collapseId = 'collapse-' + config.id

    const collapse = this.getCollapse({
      id: collapseId,
      startCollapsed: config.startCollapsed
    })

    const collapseToggle = this.getCollapseToggle({
      textContent: config.title + ' ' + 'properties',
      id: 'collapse-toggle-' + config.id,
      icon: 'collapse',
      collapseId: collapseId,
      collapse: collapse,
      startCollapsed: config.startCollapsed
    })

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    container.appendChild(fieldset)
    fieldset.appendChild(legend)

    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container)
    }

    fieldset.appendChild(collapse)
    collapse.appendChild(body)

    if (config.description) {
      body.appendChild(description)
    }

    body.appendChild(messages)

    if (config.readOnly === false) {
      legend.appendChild(actions)
    }

    actions.appendChild(btnGroup)
    btnGroup.appendChild(addBtn)
    actions.appendChild(arrayActions)
    body.appendChild(childrenSlot)

    if (config.enableCollapseToggle) {
      actions.appendChild(collapseToggle)
    }

    return {
      container,
      collapseToggle,
      collapse,
      body,
      actions,
      messages,
      childrenSlot,
      btnGroup,
      addBtn,
      arrayActions
    }
  }

  getArrayItem (config = {}) {
    const container = document.createElement('div')
    const card = this.getCard()
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const header = this.getCardHeader()
    const body = this.getCardBody()

    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(body)

    if (config.readOnly === false) {
      header.appendChild(actions)
    }

    actions.appendChild(arrayActions)

    return {
      container,
      card,
      header,
      body,
      actions,
      arrayActions
    }
  }

  /**
   * Multiple control is a card containing multiple editors options that can be
   * selected with a switcher control. Only one editor can be active/visible
   * at a time
   */
  getMultipleControl (config = {}) {
    const container = document.createElement('div')
    const card = this.getCard()
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const header = this.getCardHeader({
      textContent: config.title,
      titleHidden: config.titleHidden
    })

    const body = this.getCardBody()

    const description = this.getDescription({
      content: config.description
    })

    const messages = this.getMessagesSlot()

    const childrenSlot = this.getChildrenSlot()

    const randomId = generateRandomID(5)

    const switcher = this.getSwitcher({
      values: config.switcherOptionValues,
      titles: config.switcherOptionsLabels,
      id: config.id + '-switcher' + '-' + randomId,
      label: config.id + '-switcher' + '-' + randomId,
      titleHidden: true,
      readOnly: config.readOnly
    })

    switcher.container.classList.add('jedi-switcher')

    container.appendChild(description)

    if (config.description) {
      container.appendChild(description)
    }

    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(body)

    if (config.readOnly === false) {
      header.appendChild(actions)
    }

    if (config.switcher) {
      actions.appendChild(switcher.container)
    }

    actions.appendChild(arrayActions)
    body.appendChild(messages)
    body.appendChild(childrenSlot)

    return {
      container,
      card,
      header,
      body,
      actions,
      messages,
      childrenSlot,
      switcher,
      arrayActions
    }
  }

  adaptForTableMultipleControl (control, td) {}

  getIfThenElseControl (config) {
    const container = document.createElement('div')
    const card = this.getCard()
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const header = this.getCardHeader({
      textContent: config.title,
      titleHidden: config.titleHidden
    })

    const body = this.getCardBody()

    const description = this.getDescription({
      content: config.description
    })

    const messages = this.getMessagesSlot()

    const childrenSlot = this.getChildrenSlot()

    body.appendChild(description)
    container.appendChild(messages)
    container.appendChild(childrenSlot)

    return {
      container,
      card,
      header,
      body,
      actions,
      messages,
      childrenSlot,
      arrayActions
    }
  }

  /**
   * Control for NullEditor
   */
  getNullControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const { label, labelText } = this.getFakeLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    const messages = this.getMessagesSlot()

    const br = document.createElement('br')

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    container.appendChild(label)

    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container)
    }

    container.appendChild(br)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, label, labelText, description, messages, actions, arrayActions }
  }

  /**
   * A Textarea
   */
  getTextareaControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const input = document.createElement('textarea')
    input.setAttribute('id', config.id)
    input.style.width = '100%'

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    container.appendChild(label)

    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container)
    }

    container.appendChild(input)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, input, label, labelText, description, messages, actions, arrayActions }
  }

  adaptForTableTextareaControl (control) {
    this.visuallyHidden(control.label)
    this.visuallyHidden(control.description)
    this.visuallyHidden(control.messages)
  }

  /**
   * An Input control
   */
  getInputControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const input = document.createElement('input')
    input.setAttribute('type', config.type)
    input.setAttribute('id', config.id)
    input.style.width = '100%'

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden,
      labelIconClass: config.labelIconClass
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    container.appendChild(label)

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container)
    }

    container.appendChild(input)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, input, label, infoButton, labelText, description, messages, actions, arrayActions }
  }

  adaptForTableInputControl (control) {
    this.visuallyHidden(control.label)
    this.visuallyHidden(control.description)
    this.visuallyHidden(control.messages)
  }

  /**
   * A radio group control
   */
  getRadiosControl (config) {
    const container = document.createElement('div')
    const fieldset = this.getRadioFieldset()
    const { legend, legendText } = this.getRadioLegend({
      textContent: config.label,
      id: config.id
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    if (config.titleHidden) {
      this.visuallyHidden(legend)
    }

    const radioControls = []
    const radios = []
    const labels = []
    const labelTexts = []

    config.values.forEach((value, index) => {
      const radioControl = document.createElement('div')
      radioControls.push(radioControl)

      const radio = document.createElement('input')
      radio.setAttribute('type', 'radio')
      radio.setAttribute('id', config.id + '-' + index)
      radio.setAttribute('name', config.id)
      radio.setAttribute('value', value)
      radios.push(radio)

      const describedBy = messagesId + ' ' + descriptionId
      radio.setAttribute('aria-describedby', describedBy)

      const label = document.createElement('label')
      label.setAttribute('for', config.id + '-' + index)

      const labelText = document.createElement('span')
      labelTexts.push(labelText)

      if (isSet(config.titles) && isSet(config.titles[index])) {
        labelText.textContent = config.titles[index] ?? value
      }

      labels.push(label)
    })

    container.appendChild(fieldset)
    fieldset.appendChild(legend)

    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container)
    }


    radioControls.forEach((radioControl, index) => {
      fieldset.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    fieldset.appendChild(description)
    fieldset.appendChild(messages)

    return {
      container,
      fieldset,
      legend,
      infoButton,
      radios,
      labels,
      labelTexts,
      radioControls,
      description,
      messages
    }
  }

  adaptForTableRadiosControl (control) {
    this.visuallyHidden(control.legend)
    this.visuallyHidden(control.description)
    this.visuallyHidden(control.messages)
  }

  /**
   * A checkbox control
   */
  getCheckboxControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const formGroup = document.createElement('span')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', config.id)

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    container.appendChild(formGroup)
    container.appendChild(actions)
    actions.appendChild(arrayActions)
    formGroup.appendChild(input)
    formGroup.appendChild(label)

    if (isObject(config.infoButton)) {
      formGroup.appendChild(infoButton.container)
    }

    formGroup.appendChild(description)
    formGroup.appendChild(messages)

    return { container, formGroup, input, label, infoButton, labelText, description, messages, actions, arrayActions }
  }

  adaptForTableCheckboxControl (control, td) {
    this.visuallyHidden(control.label)
    this.visuallyHidden(control.description)
    this.visuallyHidden(control.messages)
    td.style.textAlign = 'center'
  }

  getCheckboxesControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()
    const fieldset = this.getFieldset()
    const body = this.getCardBody()
    const { legend, legendText } = this.getLegend({
      textContent: config.label,
      id: config.id
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    if (config.titleHidden) {
      this.visuallyHidden(legend)
    }

    const checkboxControls = []
    const checkboxes = []
    const labels = []
    const labelTexts = []

    config.values.forEach((value, index) => {
      const checkboxControl = document.createElement('div')
      checkboxControls.push(checkboxControl)

      const checkbox = document.createElement('input')
      checkbox.setAttribute('type', 'checkbox')
      checkbox.setAttribute('id', config.id + '-' + index)
      checkbox.setAttribute('value', value)
      checkboxes.push(checkbox)

      const describedBy = messagesId + ' ' + descriptionId
      checkbox.setAttribute('aria-describedby', describedBy)

      const label = document.createElement('label')
      label.setAttribute('for', config.id + '-' + index)

      const labelText = document.createElement('span')
      labelTexts.push(labelText)

      if (config.titles && config.titles[index]) {
        labelText.textContent = config.titles[index]
      }

      labels.push(label)
    })

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    container.appendChild(fieldset)
    container.appendChild(actions)
    fieldset.appendChild(legend)

    if (isObject(config.infoButton)) {
      legendText.appendChild(infoButton.container)
    }

    fieldset.appendChild(body)
    actions.appendChild(arrayActions)

    checkboxControls.forEach((checkboxControl, index) => {
      body.appendChild(checkboxControls[index])
      checkboxControl.appendChild(checkboxes[index])
      checkboxControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    body.appendChild(description)
    body.appendChild(messages)

    return {
      container,
      fieldset,
      legend,
      body,
      checkboxes,
      labels,
      labelTexts,
      checkboxControls,
      description,
      messages,
      actions,
      arrayActions
    }
  }

  adaptForTableCheckboxesControl (control, td) {
    this.visuallyHidden(control.legend)
    this.visuallyHidden(control.description)
    this.visuallyHidden(control.messages)
    td.style.textAlign = 'center'
  }

  /**
   * A select control
   */
  getSelectControl (config) {
    const container = document.createElement('div')
    const actions = this.getActionsSlot()
    const arrayActions = this.getArrayActionsSlot()

    const input = document.createElement('select')
    input.setAttribute('id', config.id)

    config.values.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)

      if (config.titles && config.titles[index]) {
        option.textContent = config.titles[index]
      }

      input.appendChild(option)
    })

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

    const descriptionId = config.id + '-description'
    const description = this.getDescription({
      content: config.description,
      id: descriptionId
    })

    const messagesId = config.id + '-messages'
    const messages = this.getMessagesSlot({
      id: messagesId
    })

    const describedBy = messagesId + ' ' + descriptionId
    input.setAttribute('aria-describedby', describedBy)

    const infoButton = this.getInfoButton(config.infoButton)

    if (config?.infoButton?.variant === 'modal') {
      this.infoButtonAsModal(infoButton, config.id, config.infoButton)
    }

    container.appendChild(label)

    if (isObject(config.infoButton)) {
      label.appendChild(infoButton.container)
    }

    container.appendChild(input)
    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(actions)
    actions.appendChild(arrayActions)

    return { container, input, label, infoButton, labelText, description, messages, actions, arrayActions }
  }

  adaptForTableSelectControl (control) {
    this.visuallyHidden(control.label)
    this.visuallyHidden(control.description)
    this.visuallyHidden(control.messages)
  }

  /**
   * Control to switch between multiple editors options
   */
  getSwitcher (config) {
    const container = document.createElement('span')
    const input = document.createElement('select')
    input.setAttribute('id', config.id)

    config.values.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)

      if (config.titles && config.titles[index]) {
        option.textContent = config.titles[index]
      }

      input.appendChild(option)
    })

    const { label, labelText } = this.getLabel({
      for: config.id,
      text: config.label,
      visuallyHidden: config.titleHidden
    })

    container.appendChild(label)
    container.appendChild(input)

    return { container, input, label, labelText }
  }

  /**
   * Another type of error message container used for more complex editors like
   * object, array and multiple editors
   */
  getAlert (config) {
    return this.getInvalidFeedback(config)
  }

  /**
   * Error messages
   * @public
   */
  getInvalidFeedback (config) {
    const html = document.createElement('div')
    const invalidFeedbackText = document.createElement('span')
    const invalidFeedbackIcon = document.createElement('span')
    invalidFeedbackText.textContent = config.message
    invalidFeedbackIcon.textContent = '⚠ '
    invalidFeedbackIcon.classList.add('jedi-error-message')
    invalidFeedbackIcon.setAttribute('aria-hidden', 'true')
    html.classList.add('jedi-error-message')
    html.appendChild(invalidFeedbackIcon)
    html.appendChild(invalidFeedbackText)
    return html
  }

  /**
   * Container for columns
   */
  getRow () {
    const row = document.createElement('div')
    row.classList.add('jedi-row')
    return row
  }

  /**
   * A column to contain content to a specific width
   */
  getCol (xs, md, offsetMd) {
    const col = document.createElement('div')
    col.classList.add('jedi-col-xs-' + xs)
    col.classList.add('jedi-col-md-' + md)

    if (offsetMd) {
      col.classList.add('jedi-col-md-offset-' + offsetMd)
    }

    return col
  }

  /**
   * Clearfix fixes layout issues in some libraries like bootstrap 3
   */
  getClearfix () {
    const clearfix = document.createElement('div')
    clearfix.classList.add('clearfix')
    return clearfix
  }

  /**
   * Tab list is a list of links that triggers tabs visibility ne at the time
   */
  getTabList () {
    const tabList = document.createElement('ul')
    tabList.classList.add('jedi-nav-list')
    return tabList
  }

  /**
   * A Tab is a wrapper for content
   */
  getTab (config) {
    const list = document.createElement('li')
    const link = document.createElement('a')
    link.classList.add('jedi-nav-link')
    link.setAttribute('href', '#' + config.id)
    link.textContent = config.hasErrors ? '⚠ ' + config.title : config.title
    list.appendChild(link)
    return { list, link }
  }

  /**
   * Wrapper for tabs
   */
  getTabContent () {
    const tabContent = document.createElement('div')
    tabContent.classList.add('tab-content')
    return tabContent
  }

  /**
   * A simple table layout
   */
  getTable () {
    const container = document.createElement('div')
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    table.appendChild(thead)
    table.appendChild(tbody)
    container.appendChild(table)

    return { container, table, thead, tbody }
  }

  /**
   * Returns a <td> element
   */
  getTableDefinition () {
    const td = document.createElement('td')
    td.style.verticalAlign = 'middle'
    td.style.whiteSpace = 'nowrap'
    return td
  }

  /**
   * Returns a <th> element
   */
  getTableHeader (config = {}) {
    const th = document.createElement('th')
    th.style.paddingLeft = '12px'
    th.style.paddingRight = '12px'

    if (config.minWidth) {
      th.style.minWidth = config.minWidth
    }

    return th
  }

  /**
   * Set tab attributes to make it toggleable
   */
  setTabPaneAttributes (element, active, id) {
    element.setAttribute('id', id)
    element.classList.add('jedi-tab-pane')
  }

  /**
   * Makes an element visually hidden
   */
  visuallyHidden (element) {
    element.setAttribute('style', 'position: absolute;width: 1px;height: 1px;padding: 0;margin: -1px;overflow: hidden;clip: rect(0,0,0,0);border: 0;')
  }

  /**
   * Reveals a visually hidden element
   */
  visuallyVisible (element) {
    element.removeAttribute('style')
  }

  /**
   * Makes an element physically hidden
   */
  physicallyHidden (element) {
    element.style.display = 'none'
  }
}

export default Theme
