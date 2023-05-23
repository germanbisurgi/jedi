import ThemeBarebones from './barebones'

class ThemeBootstrap5 extends ThemeBarebones {
  getEditorContainer () {
    return super.getEditorContainer()
  }

  getFieldset () {
    const html = document.createElement('fieldset')
    html.classList.add('card')
    html.classList.add('mb-3')
    return html
  }

  getFieldsetBody () {
    const html = super.getFieldsetBody()
    html.classList.add('card-body')
    return html
  }

  getLegend (config) {
    const html = super.getLegend(config)
    html.classList.add('card-header')
    html.classList.add('d-flex')
    html.classList.add('justify-content-between')
    html.classList.add('align-items-center')
    html.classList.add('py-1')
    html.classList.add('float-right')
    return html
  }

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot()
    html.classList.add('collapse')
    html.setAttribute('id', config.id)
    return html
  }

  getActionsSlot () {
    return super.getActionsSlot()
  }

  getArrayActionsSlot () {
    return super.getArrayActionsSlot()
  }

  getChildrenSlot () {
    return super.getChildrenSlot()
  }

  getMessagesSlot () {
    return super.getMessagesSlot()
  }

  getControlSlot () {
    const controlSlot = super.getControlSlot()
    controlSlot.classList.add('mb-3')
    return controlSlot
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-bs-toggle', 'collapse')
    html.setAttribute('data-bs-target', '#' + config.id)
    html.classList.add('jedi-properties-toggle')
    return html
  }

  getPropertiesActivators () {
    return super.getPropertiesActivators()
  }

  getBtnGroup () {
    const html = super.getBtnGroup()
    html.classList.add('btn-group')
    return html
  }

  getButton (config) {
    const html = super.getButton(config)
    html.classList.add('btn')
    html.classList.add('btn-sm')
    return html
  }

  getArrayBtnAdd (config) {
    return super.getArrayBtnAdd(config)
  }

  getArrayBtnDeleteAll (config) {
    return super.getArrayBtnDeleteAll(config)
  }

  getButtonActiveClass () {
    return 'btn-primary'
  }

  getDescription (config) {
    const description = super.getDescription(config)
    description.classList.add('form-text')
    return description
  }

  getTextareaControl (config) {
    const { container, input, label, labelText, description } = super.getTextareaControl(config)
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.srOnly) {
      label.classList.add('visually-hidden')
    }

    return { container, input, label, labelText, description }
  }

  getInputControl (config) {
    const { container, input, label, labelText, description } = super.getInputControl(config)
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.srOnly) {
      label.classList.add('visually-hidden')
    }

    return { container, input, label, labelText, description }
  }

  getRadiosControl (config) {
    const { container, legend, radios, labels, labelTexts, radioControls, description } = super.getRadiosControl(config)

    container.classList.add('form-group')

    radioControls.forEach((radioControl, index) => {
      radioControl.classList.add('form-check')
      radios[index].classList.add('form-check-input')
      labels[index].classList.add('form-check-label')

      container.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    container.appendChild(description)

    return { container, legend, radios, labels, labelTexts, radioControls, description }
  }

  getCheckboxControl (config) {
    const { container, input, label, labelText, description } = super.getCheckboxControl(config)
    container.classList.add('form-check')
    input.classList.add('form-check-input')
    label.classList.add('form-check-label')

    if (config.srOnly) {
      label.classList.add('visually-hidden')
    }
    container.appendChild(input)
    container.appendChild(label)
    container.appendChild(description)
    return { container, input, label, labelText, description }
  }

  getSelectControl (config) {
    const { container, input, label, labelText, description } = super.getSelectControl(config)
    input.classList.add('form-select')
    return { container, input, label, labelText, description }
  }

  getSwitcher (config) {
    const { container, input, label, labelText, description } = super.getSwitcher(config)
    input.classList.remove('form-select')
    label.classList.add('visually-hidden')
    return { container, input, label, labelText, description }
  }

  getAlert (config) {
    const html = super.getAlert(config)
    html.classList.add('alert')
    html.classList.add('alert-danger')
    return html
  }

  getInvalidFeedback (config) {
    const html = super.getInvalidFeedback(config)
    html.classList.add('text-danger')
    html.classList.add('d-block')
    html.classList.add('form-text')
    return html
  }
}

export default ThemeBootstrap5
