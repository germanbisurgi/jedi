class Theme {
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
