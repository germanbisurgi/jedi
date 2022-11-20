class Wireframe {
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
      error.classList.add('alert')
      error.classList.add('alert-danger')
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
    const btnGroup = document.createElement('div')
    btnGroup.classList.add('btn-group')
    return btnGroup
  }

  getButton (text) {
    const button = document.createElement('button')
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.setAttribute('type', 'button')
    button.textContent = text
    return button
  }

  getContainer () {
    const container = document.createElement('div')
    container.classList.add('form-group')
    return container
  }

  getDescriptionContainer (text) {
    const container = document.createElement('p')
    container.textContent = text
    return container
  }

  getFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('card')
    fieldset.classList.add('card-body')
    return fieldset
  }

  getErrorsContainer () {
    return document.createElement('div')
  }

  getH3 (labelText, attributes = {}) {
    const label = document.createElement('h3')
    label.textContent = labelText
    this.setAttributes(label, attributes)
    return label
  }

  getCheckboxLabel (labelText, attrFor) {
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', attrFor)
    label.textContent = labelText
    return label
  }

  getRadioLabel (labelText, attrFor) {
    const label = document.createElement('label')
    label.classList.add('form-check-label')
    label.setAttribute('for', attrFor)
    label.textContent = labelText
    return label
  }

  getLabel (labelText, attributes = {}) {
    const label = document.createElement('label')
    label.textContent = labelText
    this.setAttributes(label, attributes)
    return label
  }

  getCheckboxContainer () {
    return document.createElement('div')
  }

  getRadioContainer () {
    return this.getCheckboxContainer()
  }

  getLegend (legendText, attributes = {}) {
    const legend = document.createElement('legend')
    legend.textContent = legendText
    this.setAttributes(legend, attributes)
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

  getMultipleSelect (indexes, labels, attributes) {
    const select = document.createElement('select')
    this.setAttributes(select, attributes)
    // select.classList.add('form-control')

    indexes.forEach((index) => {
      const option = document.createElement('option')
      option.setAttribute('value', index)
      option.textContent = labels[index]

      if (index === 0) {
        option.setAttribute('selected', true)
      }

      select.appendChild(option)
    })

    return select
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

  getOutput (attributes = {}) {
    const output = document.createElement('output')
    this.setAttributes(output, attributes)
    return output
  }
}

export default Wireframe
