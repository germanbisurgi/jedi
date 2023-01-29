class ThemeBarebones {
  getInputError (config) {
    const error = document.createElement('p')
    error.classList.add('jedi-error-message')
    error.textContent = config.message
    return error
  }

  getPropertiesSlot () {
    const slot = document.createElement('div')
    slot.classList.add('jedi-properties-slot')
    return slot
  }

  getActionsSlot () {
    const slot = document.createElement('div')
    slot.classList.add('jedi-actions-slot')
    return slot
  }

  getChildEditorsSlot () {
    const slot = document.createElement('div')
    slot.classList.add('jedi-child-editors-slot')
    return slot
  }

  getBtnGroup () {
    return document.createElement('div')
  }

  getButton (config) {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.value = config.value
    button.textContent = config.textContent
    return button
  }

  getButtonActiveClass () {
    return 'btn-info'
  }

  getContainer () {
    return document.createElement('div')
  }

  getDescription (config) {
    const container = document.createElement('small')
    container.textContent = config.textContent
    return container
  }

  getFieldset () {
    return document.createElement('fieldset')
  }

  getMessagesSlot () {
    const messagesSlot = document.createElement('div')
    messagesSlot.classList.add('jedi-messages-slot')
    return messagesSlot
  }

  getCheckboxLabel (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return label
  }

  getRadioLegend (config) {
    const label = document.createElement('p')
    label.textContent = config.textContent

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return label
  }

  getRadioLabel (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return label
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
}

export default ThemeBarebones
