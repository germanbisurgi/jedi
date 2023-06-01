class ThemeBarebones {
  getEditorContainer () {
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

  getFieldsetFooter () {
    return document.createElement('div')
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

  getArrayActionsSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-array-actions-slot')
    return html
  }

  getChildrenSlot () {
    const html = document.createElement('div')
    html.classList.add('jedi-child-editors-slot')
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
    const description = document.createElement('div')
    description.textContent = config.textContent
    return description
  }

  getObjectControl (config) {
    const container = document.createElement('div')
    const fieldset = this.getFieldset()

    const legend = this.getLegend({
      textContent: config.title,
      srOnly: config.srOnly
    })

    const actions = this.getActionsSlot()

    const body = this.getFieldsetBody()

    const description = this.getDescription({
      textContent: config.description
    })

    const messages = this.getMessagesSlot()
    const childrenSlot = this.getChildrenSlot()

    const propertiesToggle = this.getPropertiesToggle({
      textContent: 'Properties',
      id: 'properties-slot-' + config.id
    })

    const propertiesContainer = this.getPropertiesSlot({
      id: 'properties-slot-' + config.id
    })

    const propertiesActivators = this.getPropertiesActivators()

    const addPropertyControl = this.getInputControl({
      type: 'text',
      id: 'jedi-add-property-input-' + config.id,
      label: 'Property'
    })

    const addPropertyBtn = this.getButton({
      textContent: 'Add property'
    })

    addPropertyBtn.classList.add('jedi-object-add')

    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(body)
    legend.appendChild(actions)
    body.appendChild(propertiesContainer)
    body.appendChild(childrenSlot)

    if (config.editableProperties) {
      actions.appendChild(propertiesToggle)
      propertiesContainer.appendChild(propertiesActivators)
      propertiesContainer.appendChild(addPropertyControl.container)
      propertiesContainer.appendChild(addPropertyBtn)
    }

    return {
      container,
      fieldset,
      legend,
      body,
      actions,
      messages,
      childrenSlot,
      propertiesToggle,
      propertiesContainer,
      addPropertyControl,
      addPropertyBtn,
      propertiesActivators
    }
  }

  getArrayControl (config) {
    const container = document.createElement('div')

    const fieldset = this.getFieldset()

    const legend = this.getLegend({
      textContent: config.title,
      srOnly: config.srOnly
    })

    const actions = this.getActionsSlot()

    const body = this.getFieldsetBody()

    const description = this.getDescription({
      textContent: config.description
    })

    const messages = this.getMessagesSlot()

    const childrenSlot = this.getChildrenSlot()

    const btnGroup = this.getBtnGroup()

    const addBtn = this.getArrayBtnAdd({
      textContent: 'Add item'
    })

    const deleteAllBtn = this.getArrayBtnDeleteAll({
      textContent: 'Delete items'
    })

    container.appendChild(description)
    container.appendChild(messages)
    container.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(body)
    legend.appendChild(actions)
    actions.appendChild(btnGroup)
    btnGroup.appendChild(addBtn)
    btnGroup.appendChild(deleteAllBtn)
    body.appendChild(childrenSlot)

    return {
      container,
      fieldset,
      legend,
      body,
      actions,
      messages,
      childrenSlot,
      btnGroup,
      addBtn,
      deleteAllBtn
    }
  }

  getTextareaControl (config) {
    const container = document.createElement('div')

    const input = document.createElement('textarea')
    input.setAttribute('id', config.id)

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    const descriptionId = config.id + '-description'
    const description = document.createElement('div')
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
      input.setAttribute('aria-describedby', descriptionId)
    }

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(description)
    label.appendChild(labelText)

    return { container, input, label, labelText, description }
  }

  getInputControl (config) {
    const container = document.createElement('div')

    const input = document.createElement('input')
    input.setAttribute('type', config.type)
    input.setAttribute('id', config.id)

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('label')
    labelText.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    const descriptionId = config.id + '-description'
    const description = document.createElement('div')
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
      input.setAttribute('aria-describedby', descriptionId)
    }

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(description)
    label.appendChild(labelText)

    return { container, input, label, labelText, description }
  }

  getRadiosControl (config) {
    const container = document.createElement('div')

    const legend = document.createElement('label')
    legend.textContent = config.label

    if (config.srOnly) {
      legend.classList.add('sr-only')
    }

    container.appendChild(legend)

    const radioControls = []
    const radios = []
    const labels = []
    const labelTexts = []

    config.values.forEach((value, index) => {
      const radioControl = document.createElement('div')
      radioControls.push(radioControl)

      const radio = document.createElement('input')
      radio.setAttribute('type', 'radio')
      radio.setAttribute('id', config.id + '-' + index)
      radio.setAttribute('value', value)
      radios.push(radio)

      const label = document.createElement('label')
      label.setAttribute('for', config.id + '-' + index)

      const labelText = document.createElement('span')
      labelTexts.push(labelText)

      if (config.titles && config.titles[index]) {
        labelText.textContent = config.titles[index]
      }

      labels.push(label)
    })

    radioControls.forEach((radioControl, index) => {
      container.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    const descriptionId = config.id + '-description'
    const description = document.createElement('div')
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
    }

    container.appendChild(description)

    return { container, legend, radios, labels, labelTexts, radioControls, description }
  }

  getCheckboxControl (config) {
    const container = document.createElement('div')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', config.id)

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    const descriptionId = config.id + '-description'
    const description = document.createElement('div')
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
      input.setAttribute('aria-describedby', descriptionId)
    }

    container.appendChild(input)
    container.appendChild(label)
    label.appendChild(labelText)
    container.appendChild(description)

    return { container, input, label, labelText, description }
  }

  getSelectControl (config) {
    const container = document.createElement('div')

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

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    const descriptionId = config.id + '-description'
    const description = document.createElement('div')
    description.setAttribute('id', descriptionId)

    if (config.description) {
      description.textContent = config.description
      input.setAttribute('aria-describedby', descriptionId)
    }

    container.appendChild(label)
    container.appendChild(input)
    label.appendChild(labelText)
    container.appendChild(description)

    return { container, input, label, labelText, description }
  }

  getSwitcher (config) {
    return this.getSelectControl(config)
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
