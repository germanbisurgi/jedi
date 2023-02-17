class ThemeBarebones {
  getAlert (config) {
    const alert = document.createElement('p')
    alert.classList.add('jedi-error-message')
    alert.textContent = config.message
    return alert
  }

  getInvalidFeedback (config) {
    const invalidFeedback = document.createElement('div')
    invalidFeedback.classList.add('jedi-error-message')
    invalidFeedback.textContent = config.message
    return invalidFeedback
  }

  getDropdown () {
    const html = document.createElement('li')
    html.classList.add('dropdown')
    return html
  }

  getDropdownToggle () {
    const html = document.createElement('a')
    html.textContent = 'Properties'
    html.setAttribute('data-toggle', 'dropdown')
    html.classList.add('dropdown-toggle')
    html.classList.add('jedi-dropdown-properties')
    return html
  }

  getDropdownMenu () {
    const html = document.createElement('ul')
    html.classList.add('dropdown-menu')
    return html
  }

  getToolbarSlot () {
    const html = document.createElement('ul')
    html.classList.add('nav')
    html.classList.add('navbar-nav')
    html.classList.add('jedi-toolbar-slot')
    return html
  }

  getActivatorsSlot () {
    const activatorsSlot = document.createElement('div')
    activatorsSlot.classList.add('jedi-properties-slot')
    return activatorsSlot
  }

  getActionsSlot () {
    const actionsSlots = document.createElement('div')
    actionsSlots.classList.add('jedi-actions-slot')
    return actionsSlots
  }

  getChildrenSlot () {
    const childrenSlot = document.createElement('div')
    childrenSlot.classList.add('jedi-child-editors-slot')
    return childrenSlot
  }

  getBtnGroup () {
    return document.createElement('div')
  }

  getButton (config) {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')

    if (config.value) {
      button.value = config.value
    }

    button.textContent = config.textContent
    return button
  }

  getContainer () {
    const container = document.createElement('div')
    container.classList.add('jedi-editor-container')
    return container
  }

  getDescription (config) {
    const description = document.createElement('small')
    description.textContent = config.textContent
    return description
  }

  getFieldset () {
    return document.createElement('fieldset')
  }

  getMessagesSlot () {
    const messagesSlot = document.createElement('div')
    messagesSlot.classList.add('jedi-messages-slot')
    return messagesSlot
  }

  getControlSlot () {
    const controlSlot = document.createElement('div')
    controlSlot.classList.add('jedi-control-slot')
    return controlSlot
  }

  getCheckboxLabel (config) {
    const checkboxLabel = document.createElement('label')
    checkboxLabel.setAttribute('for', config.for)
    checkboxLabel.textContent = config.textContent

    if (config.srOnly) {
      checkboxLabel.classList.add('sr-only')
    }

    return checkboxLabel
  }

  getRadioLegend (config) {
    const radioLegend = document.createElement('p')
    radioLegend.textContent = config.textContent

    if (config.srOnly) {
      radioLegend.classList.add('sr-only')
    }

    return radioLegend
  }

  getRadioLabel (config) {
    const radioLabel = document.createElement('label')
    radioLabel.setAttribute('for', config.for)
    radioLabel.textContent = config.textContent

    if (config.srOnly) {
      radioLabel.classList.add('sr-only')
    }

    return radioLabel
  }

  getLabel (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return label
  }

  getCheckboxContainer () {
    return document.createElement('div')
  }

  getRadioContainer () {
    return document.createElement('div')
  }

  getLegend (config) {
    const legend = document.createElement('legend')
    legend.textContent = config.textContent
    legend.setAttribute('style', 'width: auto;')

    if (config.srOnly) {
      legend.classList.add('sr-only')
    }

    return legend
  }

  getInput (config) {
    const input = document.createElement('input')
    input.setAttribute('type', config.type)
    input.setAttribute('id', config.id)
    input.classList.add('form-control')
    return input
  }

  getCheckbox (config) {
    const checkbox = document.createElement('input')
    checkbox.setAttribute('id', config.id)
    checkbox.setAttribute('type', 'checkbox')
    return checkbox
  }

  getRadio (config) {
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('value', config.value)
    radio.setAttribute('id', config.id)
    return radio
  }

  getTextarea (config) {
    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', config.id)
    return textarea
  }

  getSelect (config) {
    const select = document.createElement('select')
    select.setAttribute('id', config.id)

    config.optionValues.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.textContent = config.optionsLabels[index]
      select.appendChild(option)
    })

    return select
  }

  getButtonActiveClass () {
    return 'btn-info'
  }
}

export default ThemeBarebones
