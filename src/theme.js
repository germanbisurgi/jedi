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
}

export default Theme
