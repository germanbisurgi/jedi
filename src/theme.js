class Theme {
  /**
   * Adds an error message to the specified editor container.
   */
  addInputError (container, message) {
    const error = document.createElement('div')
    error.classList.add('jedi-error-message')
    error.textContent = message
    container.appendChild(error)
  }

  /**
   * Removes any error message from the specified editor container.
   */
  removeInputError (container) {
    const errors = container.querySelectorAll('.jedi-error-message')
    errors.forEach((error) => {
      container.removeChild(error)
    })
  }

  getButton (text) {
    const button = document.createElement('button')
    button.textContent = text
    return button
  }

  getContainer () {
    return document.createElement('div')
  }

  getLabel (text) {
    const label = document.createElement('label')
    label.textContent = text
    return label
  }

  getInput (type) {
    const input = document.createElement('input')
    input.setAttribute('type', type)
    return input
  }

  getSelect (optionValues, optionsLabels) {
    const select = document.createElement('select')
    optionValues.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.textContent = optionsLabels[index]
      select.appendChild(option)
    })
    return select
  }
}

export default Theme
