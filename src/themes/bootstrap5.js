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

  getDescriptionSlot () {
    return super.getDescriptionSlot()
  }

  getMessagesSlot () {
    return super.getMessagesSlot()
  }

  getControlSlot () {
    return super.getControlSlot()
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
    return super.getDescription(config)
  }

  getTextareaControl (config) {
    const control = document.createElement('div')
    control.classList.add('form-group')

    const input = document.createElement('textarea')
    input.setAttribute('id', config.id)
    input.classList.add('form-control')

    const label = document.createElement('label')
    label.setAttribute('for', config.id)
    label.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    control.appendChild(label)
    control.appendChild(input)

    return { control, input }
  }

  getInputControl (config) {
    const control = document.createElement('div')
    control.classList.add('form-group')

    const input = document.createElement('input')
    input.setAttribute('type', config.type)
    input.setAttribute('id', config.id)
    input.classList.add('form-control')

    const label = document.createElement('label')
    label.setAttribute('for', config.id)
    label.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    control.appendChild(label)
    control.appendChild(input)

    return { control, input }
  }

  getRadiosControl (config) {
    const control = document.createElement('div')

    const legend = document.createElement('label')
    legend.textContent = config.label

    if (config.srOnly) {
      legend.classList.add('sr-only')
    }

    control.appendChild(legend)

    const inputs = []

    config.values.forEach((value, index) => {
      const radioControl = document.createElement('div')
      radioControl.classList.add('form-check')

      const radio = document.createElement('input')
      radio.setAttribute('type', 'radio')
      radio.setAttribute('id', config.id + '.' + index)
      radio.setAttribute('value', value)
      radio.classList.add('form-check-input')
      inputs.push(radio)

      const label = document.createElement('label')
      label.setAttribute('for', config.id + '.' + index)
      label.classList.add('form-check-label')

      if (config.titles && config.titles[index]) {
        label.textContent = config.titles[index]
      }

      control.appendChild(radioControl)
      radioControl.appendChild(radio)
      radioControl.appendChild(label)
    })

    return { control, inputs }
  }

  getCheckboxControl (config) {
    const control = document.createElement('div')
    control.classList.add('form-check')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', config.id)
    input.classList.add('form-check-input')

    const label = document.createElement('label')
    label.setAttribute('for', config.id)
    input.classList.add('form-check-label')
    label.textContent = config.label

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    // appends
    control.appendChild(input)
    control.appendChild(label)

    return { control, input }
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    control.control.classList.add('form-group')
    control.input.classList.add('form-select')
    return control
  }

  getAlert (config) {
    const html = super.getAlert(config)
    html.classList.add('alert')
    html.classList.add('alert-danger')
    return html
  }

  getInvalidFeedback (config) {
    const html = super.getInvalidFeedback(config)
    html.classList.add('invalid-feedback')
    html.classList.add('d-block')
    return html
  }
}

export default ThemeBootstrap5
