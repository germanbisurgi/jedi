import ThemeBarebones from './barebones'

class ThemeBootstrap4 extends ThemeBarebones {
  /**
   * Adds an error message to the specified editor container.
   */
  addInputError (container, message) {
    if (container) {
      const error = document.createElement('p')
      error.classList.add('jedi-error-message')
      error.classList.add('alert')
      error.classList.add('alert-danger')
      error.textContent = message
      container.appendChild(error)
    }
  }

  getBtnGroup () {
    const btnGroup = document.createElement('div')
    btnGroup.classList.add('btn-group')
    return btnGroup
  }

  getButton (text) {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.setAttribute('type', 'button')
    button.textContent = text
    return button
  }

  getContainer () {
    const container = document.createElement('div')
    container.classList.add('form-group')
    return container
  }

  getFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('card')
    fieldset.classList.add('card-body')
    fieldset.classList.add('mb-3')
    return fieldset
  }

  getCheckboxLabel (labelText, attrFor) {
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', attrFor)
    label.textContent = labelText
    return label
  }

  getRadioLabel (config) {
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent
    return label
  }

  getCheckboxContainer () {
    const checkboxContainer = document.createElement('div')
    checkboxContainer.classList.add('form-check')
    return checkboxContainer
  }

  getRadioContainer () {
    const checkboxContainer = document.createElement('div')
    checkboxContainer.classList.add('form-check')
    return checkboxContainer
  }

  getLegend (legendText, attributes = {}) {
    const legend = document.createElement('legend')
    legend.textContent = legendText
    this.setAttributes(legend, attributes)
    legend.setAttribute('style', 'width: auto;')
    return legend
  }

  getCheckbox (attributes = {}) {
    const checkbox = document.createElement('input')
    checkbox.classList.add('form-check-input')
    checkbox.setAttribute('type', 'checkbox')
    this.setAttributes(checkbox, attributes)
    return checkbox
  }

  getRadio () {
    const radio = document.createElement('input')
    radio.classList.add('form-check-input')
    radio.setAttribute('type', 'radio')
    return radio
  }

  getTextarea (attributes = {}) {
    const textarea = document.createElement('textarea')
    this.setAttributes(textarea, attributes)
    textarea.classList.add('form-control')
    return textarea
  }

  getSelect (optionValues, optionsLabels, attributes = {}) {
    const select = document.createElement('select')
    this.setAttributes(select, attributes)
    select.classList.add('form-control')

    optionValues.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.textContent = optionsLabels[index]
      select.appendChild(option)
    })

    return select
  }
}

export default ThemeBootstrap4
