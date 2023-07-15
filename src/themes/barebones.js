class ThemeBarebones {
  getEditorContainer () {
    const html = document.createElement('div')
    html.classList.add('jedi-editor-container')
    return html
  }

  getFieldset () {
    return document.createElement('fieldset')
  }

  getCard () {
    return document.createElement('div')
  }

  getLegend (config) {
    const html = document.createElement('legend')
    html.textContent = config.textContent
    return html
  }

  getCardHeader (config) {
    const header = document.createElement('div')
    const title = document.createElement('span')
    title.textContent = config.textContent

    if (config.srOnly) {
      title.classList.add('sr-only')
    }

    header.appendChild(title)

    return header
  }

  getCardBody () {
    return document.createElement('div')
  }

  getFooter () {
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
    const card = this.getCard()
    const actions = this.getActionsSlot()

    const header = this.getCardHeader({
      textContent: config.title,
      srOnly: config.srOnly
    })

    const body = this.getCardBody()

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

    const fieldset = this.getFieldset()
    const legend = this.getLegend({
      textContent: config.title
    })

    addPropertyBtn.classList.add('jedi-object-add')

    container.appendChild(description)
    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(body)
    header.appendChild(actions)
    body.appendChild(propertiesContainer)
    body.appendChild(messages)
    body.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(childrenSlot)

    if (config.editableProperties) {
      actions.appendChild(propertiesToggle)
      propertiesContainer.appendChild(propertiesActivators)
      propertiesContainer.appendChild(addPropertyControl.container)
      propertiesContainer.appendChild(addPropertyBtn)
    }

    return {
      container,
      card,
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
    const card = this.getCard()
    const actions = this.getActionsSlot()

    const header = this.getCardHeader({
      textContent: config.title,
      srOnly: config.srOnly
    })

    const body = this.getCardBody()

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

    const fieldset = this.getFieldset()
    const legend = this.getLegend({
      textContent: config.title
    })

    container.appendChild(description)
    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(body)
    header.appendChild(actions)
    actions.appendChild(btnGroup)
    btnGroup.appendChild(addBtn)
    btnGroup.appendChild(deleteAllBtn)
    body.appendChild(messages)
    body.appendChild(fieldset)
    fieldset.appendChild(legend)
    fieldset.appendChild(childrenSlot)

    return {
      container,
      card,
      body,
      actions,
      messages,
      childrenSlot,
      btnGroup,
      addBtn,
      deleteAllBtn
    }
  }

  getArrayItem (config) {
    const container = this.getCard()
    const actions = this.getActionsSlot()
    const body = this.getCardBody()
    const btnGroup = this.getBtnGroup()

    const deleteBtn = this.getButton({
      textContent: 'Delete item'
    })

    deleteBtn.classList.add('jedi-array-delete')

    const moveUpBtn = this.getButton({
      textContent: 'Move up'
    })

    moveUpBtn.classList.add('jedi-array-move-up')

    const moveDownBtn = this.getButton({
      textContent: 'Move down'
    })

    moveDownBtn.classList.add('jedi-array-move-down')

    const childrenSlot = this.getChildrenSlot()

    container.appendChild(body)
    body.appendChild(actions)
    body.appendChild(childrenSlot)
    body.appendChild(btnGroup)
    btnGroup.appendChild(deleteBtn)
    btnGroup.appendChild(moveUpBtn)
    btnGroup.appendChild(moveDownBtn)

    return {
      container,
      body,
      childrenSlot,
      deleteBtn,
      moveUpBtn,
      moveDownBtn
    }
  }

  getMultipleControl (config) {
    const container = document.createElement('div')
    const card = this.getCard()
    const actions = this.getActionsSlot()

    const header = this.getCardHeader({
      textContent: config.title,
      srOnly: config.srOnly
    })

    const body = this.getCardBody()

    const description = this.getDescription({
      textContent: config.description
    })

    const messages = this.getMessagesSlot()

    const childrenSlot = this.getChildrenSlot()

    const switcher = this.getSwitcher({
      values: config.switcherOptionValues,
      titles: config.switcherOptionsLabels,
      id: config.id + '-switcher',
      label: config.id + '-switcher',
      srOnly: true
    })

    switcher.container.classList.add('jedi-switcher')

    container.appendChild(description)
    container.appendChild(card)
    card.appendChild(header)
    card.appendChild(body)
    header.appendChild(actions)
    actions.appendChild(switcher.container)
    body.appendChild(messages)
    body.appendChild(childrenSlot)

    return {
      container,
      card,
      body,
      actions,
      messages,
      childrenSlot,
      switcher
    }
  }

  getNullControl (config) {
    const container = document.createElement('div')

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
    }

    const messages = this.getMessagesSlot()

    container.appendChild(label)
    container.appendChild(description)
    container.appendChild(messages)
    label.appendChild(labelText)

    return { container, label, labelText, description, messages }
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

    const messages = this.getMessagesSlot()

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(description)
    container.appendChild(messages)
    label.appendChild(labelText)

    return { container, input, label, labelText, description, messages }
  }

  getInputControl (config) {
    const container = document.createElement('div')

    const input = document.createElement('input')
    input.setAttribute('type', config.type)
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

    const messages = this.getMessagesSlot()

    container.appendChild(label)
    container.appendChild(input)
    container.appendChild(description)
    container.appendChild(messages)
    label.appendChild(labelText)

    return { container, input, label, labelText, description, messages }
  }

  getRadiosControl (config) {
    const container = document.createElement('div')

    const fieldset = this.getFieldset()

    const legend = this.getLegend({
      textContent: config.label
    })

    fieldset.appendChild(legend)

    const label = document.createElement('span')
    label.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    const messages = this.getMessagesSlot()

    fieldset.appendChild(label)

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
      fieldset.appendChild(radioControls[index])
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

    container.appendChild(fieldset)
    fieldset.appendChild(description)
    fieldset.appendChild(messages)

    return { container, fieldset, legend, label, radios, labels, labelTexts, radioControls, description, messages }
  }

  getCheckboxControl (config) {
    const container = document.createElement('div')

    const formGroup = document.createElement('div')

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

    const messages = this.getMessagesSlot()

    container.appendChild(formGroup)
    formGroup.appendChild(input)
    formGroup.appendChild(label)
    label.appendChild(labelText)
    formGroup.appendChild(description)
    formGroup.appendChild(messages)

    return { container, formGroup, input, label, labelText, description, messages }
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

    const messages = this.getMessagesSlot()

    container.appendChild(label)
    container.appendChild(input)
    label.appendChild(labelText)
    container.appendChild(description)
    container.appendChild(messages)

    return { container, input, label, labelText, description, messages }
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

  getRow () {
    const row = document.createElement('div')
    row.classList.add('jedi-row')
    return row
  }

  getCol (xs, md, offsetMd) {
    const col = document.createElement('div')
    col.classList.add('jedi-col-xs-' + xs)
    col.classList.add('jedi-col-md-' + md)

    if (offsetMd) {
      col.classList.add('jedi-col-md-offset-' + offsetMd)
    }

    return col
  }

  getTabList (config) {
    const tabList = document.createElement('ul')
    tabList.classList.add('jedi-nav-list')
    return tabList
  }

  getTab (config) {
    const list = document.createElement('li')
    const link = document.createElement('a')
    link.classList.add('jedi-nav-link')
    link.setAttribute('href', '#' + config.id)
    link.textContent = config.title
    list.appendChild(link)
    return { list, link }
  }

  getTabContent () {
    const tabContent = document.createElement('div')
    tabContent.classList.add('tab-content')
    return tabContent
  }

  setTabPaneAttributes (element, active, id) {
    element.setAttribute('id', id)
    element.classList.add('jedi-tab-pane')
  }
}

export default ThemeBarebones
