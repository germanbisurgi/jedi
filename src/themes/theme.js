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
    if (container) {
      const error = document.createElement('p')
      error.classList.add('jedi-error-message')
      error.classList.add('alert')
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

  getButton (text) {
    const button = document.createElement('button')
    button.setAttribute('class', 'btn')
    button.setAttribute('type', 'button')
    button.textContent = text
    return button
  }

  getErrorsContainer () {
    return document.createElement('div')
  }

  getDebugContainer () {
    return document.createElement('pre')
  }

  getH3 (labelText, attributes = {}) {
    const label = document.createElement('h3')
    label.textContent = labelText
    this.setAttributes(label, attributes)
    return label
  }

  getLabel (labelText, attributes = {}) {
    const label = document.createElement('label')
    label.textContent = labelText
    this.setAttributes(label, attributes)
    return label
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
    this.setAttributes(checkbox, attributes)
    checkbox.setAttribute('type', 'checkbox')
    return checkbox
  }

  getRadio (attributes = {}) {
    const checkbox = document.createElement('input')
    this.setAttributes(checkbox, attributes)
    checkbox.setAttribute('type', 'radio')
    return checkbox
  }

  getTextarea (attributes = {}) {
    const textarea = document.createElement('textarea')
    this.setAttributes(textarea, attributes)
    textarea.classList.add('form-control')
    return textarea
  }

  getRadioGroup (optionValues, optionsLabels, radioGroupName, legendText) {
    const radioGroup = document.createElement('fieldset')

    if (legendText) {
      const legend = this.getLegend(legendText)
      radioGroup.appendChild(legend)
    }

    optionValues.forEach((value, index) => {
      const labelText = optionsLabels[index]

      const label = this.getLabel(labelText, {
        for: radioGroupName + '[' + value + ']'
      })

      const radio = this.getRadio({
        type: 'radio',
        value: value,
        id: radioGroupName + '[' + value + ']',
        name: radioGroupName
      })

      radioGroup.appendChild(radio)
      radioGroup.appendChild(label)
    })
    return radioGroup
  }

  getTabs (path, indexes, labels) {
    path = path.replace('.', '-')

    // navTab
    const navTab = document.createElement('ul')
    navTab.classList.add('nav')
    navTab.classList.add('nav-pills')

    indexes.forEach((index) => {
      // li
      const li = document.createElement('li')
      if (index === 0) {
        li.classList.add('active')
      }
      navTab.appendChild(li)

      // tab
      const tab = document.createElement('a')
      tab.setAttribute('data-toggle', 'tab')
      tab.setAttribute('data-index', index)
      tab.textContent = labels[index]
      li.appendChild(tab)
    })

    return navTab
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

export default Theme