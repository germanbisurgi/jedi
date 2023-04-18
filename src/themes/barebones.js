class ThemeBarebones {
  getAlert (config) {
    const html = document.createElement('p')
    html.classList.add('jedi-error-message')
    html.textContent = config.message
    return html
  }

  getInvalidFeedback (config) {
    const html = document.createElement('div')
    html.classList.add('jedi-error-message')
    html.textContent = config.message
    return html
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.classList.add('jedi-properties-toggle')
    return html
  }

  getPropertiesActivators () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-container')
    return html
  }

  getPropertiesSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-slot')
    return html
  }

  getActionsSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-actions-slot')
    return html
  }

  getChildrenSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-child-editors-slot')
    return html
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

    if (config.id) {
      button.setAttribute('id', config.value)
    }

    button.textContent = config.textContent
    return button
  }

  getArrayBtnAdd (config) {
    const html = this.getButton(config)
    html.classList.add('jedi-array-add')
    return html
  }

  getArrayBtnDeleteAll (config) {
    const html = this.getButton(config)
    html.classList.add('jedi-array-delete-all')
    return html
  }

  getContainer () {
    const container = document.createElement('div')
    container.classList.add('jedi-editor-container')
    return container
  }

  getContainerHead (config) {
    const html = document.createElement('legend')
    html.textContent = config.textContent
    html.classList.add('jedi-container-head')

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getFieldset () {
    return document.createElement('fieldset')
  }

  getDescription (config) {
    const description = document.createElement('small')
    description.textContent = config.textContent
    return description
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
