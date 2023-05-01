class ThemeBarebones {
  getContainer () {
    const container = document.createElement('div')
    container.classList.add('jedi-editor-container')
    return container
  }

  getFieldset () {
    return document.createElement('fieldset')
  }

  getFieldsetBody () {
    return document.createElement('div')
  }

  getLegend (config) {
    const html = document.createElement('legend')
    html.textContent = config.textContent
    html.style.fontSize = 'inherit'

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

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

  getDescriptionSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-description-slot')
    return html
  }

  getMessagesSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-messages-slot')
    return html
  }

  getControlSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-control-slot')
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

  getButtonActiveClass () {
    return 'jedi-active-btn'
  }

  getDescription (config) {
    const html = document.createElement('p')
    const small = document.createElement('small')
    small.textContent = config.textContent
    html.appendChild(small)
    return html
  }

  getCheckboxLabel (config) {
    const html = document.createElement('label')
    html.setAttribute('for', config.for)
    html.textContent = config.textContent

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getRadioLabel (config) {
    const html = document.createElement('label')
    html.setAttribute('for', config.for)
    html.textContent = config.textContent

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
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

  getFakeLegend (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return label
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
}

export default ThemeBarebones
