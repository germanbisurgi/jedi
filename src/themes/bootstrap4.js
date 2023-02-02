import ThemeBarebones from './barebones'

class ThemeBootstrap4 extends ThemeBarebones {
  getInputError (config) {
    const error = document.createElement('p')
    error.classList.add('jedi-error-message')
    error.classList.add('alert')
    error.classList.add('alert-danger')
    error.textContent = config.message
    return error
  }

  getInput (config) {
    const input = super.getInput(config)
    input.classList.add('mb-3')
    return input
  }

  getBtnGroup () {
    const btnGroup = document.createElement('div')
    btnGroup.classList.add('btn-group')
    btnGroup.classList.add('mb-3')
    return btnGroup
  }

  getButton (config) {
    const button = super.getButton(config)
    button.classList.add('btn')
    button.classList.add('btn-default')
    return button
  }

  getFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('card')
    fieldset.classList.add('card-body')
    fieldset.classList.add('mb-3')
    fieldset.classList.add('py-0')
    return fieldset
  }

  getCheckboxLabel (config) {
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return label
  }

  getRadioLabel (config) {
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return label
  }

  getControlSlot () {
    const slot = super.getControlSlot()
    slot.classList.add('form-group')
    return slot
  }

  getCheckboxContainer () {
    const checkboxContainer = super.getCheckboxContainer()
    checkboxContainer.classList.add('form-check')
    return checkboxContainer
  }

  getRadioContainer () {
    const checkboxContainer = super.getRadioContainer()
    checkboxContainer.classList.add('form-check')
    return checkboxContainer
  }

  getCheckbox (config) {
    const checkbox = document.createElement('input')
    checkbox.classList.add('form-check-input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('id', config.id)
    return checkbox
  }

  getRadio (config) {
    const radio = document.createElement('input')
    radio.classList.add('form-check-input')
    radio.setAttribute('type', 'radio')
    radio.setAttribute('value', config.value)
    radio.setAttribute('id', config.id)
    return radio
  }

  getTextarea (config) {
    const textarea = document.createElement('textarea')
    textarea.setAttribute('id', config.id)
    textarea.classList.add('form-control')
    return textarea
  }

  getSelect (config) {
    const select = document.createElement('select')
    select.setAttribute('id', config.id)
    select.classList.add('form-control')

    config.optionValues.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.textContent = config.optionsLabels[index]
      select.appendChild(option)
    })

    return select
  }
}

export default ThemeBootstrap4
