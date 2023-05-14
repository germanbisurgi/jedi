class ThemeBarebones {
  getContainer () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-container')
    return html
  }

  getFieldset () {
    return document.createElement('fieldset')
  }

  getFieldsetBody () {
    return document.createElement('div')
  }

  getLegend (config) {
    const html = document.createElement('legend')
    html.textContent = config.textContent
    html.style.fontSize = 'inherit'

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getPropertiesSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-slot')
    return html
  }

  getActionsSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-actions-slot')
    return html
  }

  getChildrenSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-child-editors-slot')
    return html
  }

  getDescriptionSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-description-slot')
    return html
  }

  getMessagesSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-messages-slot')
    return html
  }

  getControlSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-control-slot')
    return html
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.classList.add('jedi-properties-toggle')
    return html
  }

  getPropertiesActivators () {
    const html = document.createElement('div')
    html.classList.add('jedi-properties-container')
    return html
  }

  getBtnGroup () {
    return document.createElement('div')
  }

  getButton (config) {
    const html = document.createElement('button')
    html.setAttribute('type', 'button')

    if (config.value) {
      html.value = config.value
    }

    if (config.id) {
      html.setAttribute('id', config.value)
    }

    html.textContent = config.textContent
    return html
  }

  getArrayBtnAdd (config) {
    const html = this.getButton(config)
    html.classList.add('jedi-array-add')
    return html
  }

  getArrayBtnDeleteAll (config) {
    const html = this.getButton(config)
    html.classList.add('jedi-array-delete-all')
    return html
  }

  getButtonActiveClass () {
    return 'jedi-active-btn'
  }

  getDescription (config) {
    const html = document.createElement('p')
    const small = document.createElement('small')
    small.textContent = config.textContent
    html.appendChild(small)
    return html
  }

  getCheckboxLabel (config) {
    const html = document.createElement('label')
    html.setAttribute('for', config.for)
    html.textContent = config.textContent

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getRadioLabel (config) {
    const html = document.createElement('label')
    html.setAttribute('for', config.for)
    html.textContent = config.textContent

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getLabel (config) {
    const html = document.createElement('label')
    html.setAttribute('for', config.for)
    html.textContent = config.textContent

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getCheckboxContainer () {
    return document.createElement('div')
  }

  getRadioContainer () {
    return document.createElement('div')
  }

  getFakeLegend (config) {
    const html = document.createElement('label')
    html.setAttribute('for', config.for)
    html.textContent = config.textContent

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getInput (config) {
    const html = document.createElement('input')
    html.setAttribute('type', config.type)
    html.setAttribute('id', config.id)
    return html
  }

  getCheckbox (config) {
    const html = document.createElement('input')
    html.setAttribute('id', config.id)
    html.setAttribute('type', 'checkbox')
    return html
  }

  getRadio (config) {
    const html = document.createElement('input')
    html.setAttribute('type', 'radio')
    html.setAttribute('value', config.value)
    html.setAttribute('id', config.id)
    return html
  }

  getTextarea (config) {
    const html = document.createElement('textarea')
    html.setAttribute('id', config.id)
    return html
  }

  getSelectControl (config) {
    // control
    const control = document.createElement('div')

    // input
    const input = document.createElement('select')
    input.setAttribute('id', config.id)

    config.values.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)

      if (config.titles && config.titles[index]) {
        option.textContent = config.titles[index]
      }

      input.appendChild(option)
    })

    // label
    const label = document.createElement('label')
    label.setAttribute('for', config.id)
    label.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    // appends
    control.appendChild(label)
    control.appendChild(input)

    return { control, input }
  }

  getSelect (config) {
    const html = document.createElement('select')
    html.setAttribute('id', config.id)

    config.optionValues.forEach((value, index) => {
      const option = document.createElement('option')
      option.setAttribute('value', value)
      option.textContent = config.optionsLabels[index]
      html.appendChild(option)
    })

    return html
  }

  getAlert (config) {
    const html = document.createElement('p')
    html.classList.add('jedi-error-message')
    html.textContent = config.message
    return html
  }

  getInvalidFeedback (config) {
    const html = document.createElement('div')
    html.classList.add('jedi-error-message')
    html.textContent = config.message
    return html
  }
}

export default ThemeBarebones
