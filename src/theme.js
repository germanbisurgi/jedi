class Theme {
  setAttributes (element, attributes = {}) {
    Object.keys(attributes).forEach((key) => {
      element.setAttribute(key, attributes[key])
    })
  }

  /**
   * Adds an error message to the specified editor container.
   */
  addInputError (container, message) {
    const error = document.createElement('p')
    error.classList.add('jedi-error-message')
    error.textContent = message
    container.appendChild(error)
  }

  /**
   * Removes any error message from the specified editor container.
   */
  removeInputError (container) {
    const path = container.getAttribute('data-path')
    const selector = '[data-path="' + path + '"] > .jedi-error-message'
    const errors = container.querySelectorAll(selector)
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

  getLabel (labelText, attributes = {}) {
    const label = document.createElement('label')
    label.textContent = labelText
    this.setAttributes(label, attributes)
    return label
  }

  getInput (attributes = {}) {
    const input = document.createElement('input')
    this.setAttributes(input, attributes)
    return input
  }

  getRadioGroup (optionValues, optionsLabels, radioGroupName) {
    const radioGroup = this.getContainer()

    optionValues.forEach((value, index) => {
      const labelText = optionsLabels[index]

      const label = this.getLabel(labelText, {
        for: radioGroupName + '[' + value + ']'
      })

      const radio = this.getInput({
        type: 'radio',
        value: value,
        id: radioGroupName + '[' + value + ']',
        name: radioGroupName
      })

      radio.addEventListener('change', () => {
        console.log('radio change')
      })

      radioGroup.appendChild(label)
      radioGroup.appendChild(radio)
    })
    return radioGroup
  }

  getSelect (optionValues, optionsLabels, selectId) {
    const select = document.createElement('select')
    select.setAttribute('id', selectId)
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

export default Theme
