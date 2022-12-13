class ThemeBarebones {
  setAttributes (element, attributes = {}) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key])
    })
  }

  /**
   * Adds an error message to the specified editor container.
   */
  addInputError (container, message) {
    if (container) {
      const error = document.createElement('p')
      error.classList.add('jedi-error-message')
      error.textContent = message
      container.appendChild(error)
    }
  }

  /**
   * Removes any error message from the specified editor container.
   */
  removeInputError (container) {
    if (container) {
      const errors = container.querySelectorAll('*')
      errors.forEach((error) => {
        container.removeChild(error)
      })
    }
  }

  getBtnGroup () {
    return document.createElement('div')
  }

  getButton (text) {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.textContent = text
    return button
  }

  getContainer () {
    return document.createElement('div')
  }

  getDescriptionContainer (text) {
    const container = document.createElement('p')
    container.textContent = text
    return container
  }

  getFieldset () {
    return document.createElement('fieldset')
  }

  getErrorsContainer () {
    return document.createElement('div')
  }

  getCheckboxLabel (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent
    return label
  }

  getRadioLabel (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent
    return label
  }

  getLabel (config) {
    const label = document.createElement('label')
    label.setAttribute('for', config.for)
    label.textContent = config.textContent
    return label
  }

  getCheckboxContainer () {
    return document.createElement('div')
  }

  getRadioContainer () {
    return document.createElement('div')
  }

  getLegend (legendText, attributes = {}) {
    const legend = document.createElement('legend')
    this.setAttributes(legend, attributes)
    legend.textContent = legendText
    return legend
  }

  getInput (attributes = {}) {
    const input = document.createElement('input')
    this.setAttributes(input, attributes)
    input.classList.add('form-control')
    return input
  }

  getCheckbox (attributes = {}) {
    const checkbox = document.createElement('input')
    this.setAttributes(checkbox, attributes)
    checkbox.setAttribute('type', 'checkbox')
    return checkbox
  }

  getRadio () {
    const radio = document.createElement('input')
    radio.setAttribute('type', 'radio')
    return radio
  }

  getTextarea (attributes = {}) {
    const textarea = document.createElement('textarea')
    this.setAttributes(textarea, attributes)
    return textarea
  }

  getSelect (optionValues, optionsLabels, attributes = {}) {
    const select = document.createElement('select')
    this.setAttributes(select, attributes)

    optionValues.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.textContent = optionsLabels[index]
      select.appendChild(option)
    })

    return select
  }
}

export default ThemeBarebones
