import ThemeBarebones from './barebones'

class ThemeBootstrap3 extends ThemeBarebones {
  getEditorContainer () {
    return super.getEditorContainer()
  }

  getFieldset () {
    const html = document.createElement('fieldset')
    html.classList.add('panel')
    html.classList.add('panel-default')
    return html
  }

  getFieldsetBody () {
    const html = super.getFieldsetBody()
    html.classList.add('panel-body')
    return html
  }

  getLegend (config) {
    const html = super.getLegend(config)
    html.classList.add('panel-heading')
    html.classList.add('pull-right')
    return html
  }

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot()
    html.classList.add('collapse')
    html.setAttribute('id', config.id)
    return html
  }

  getActionsSlot () {
    const html = super.getActionsSlot()
    html.classList.add('pull-right')
    return html
  }

  getArrayActionsSlot () {
    const html = super.getArrayActionsSlot()
    html.classList.add('pull-right')
    return html
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
    html.setAttribute('data-toggle', 'collapse')
    html.setAttribute('data-target', '#' + config.id)
    html.classList.add('jedi-properties-toggle')
    html.classList.add('pull-right')
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
    html.classList.add('btn-xs')
    html.classList.add('btn-default')
    return html
  }

  getArrayBtnAdd (config) {
    return super.getArrayBtnAdd(config)
  }

  getArrayBtnDeleteAll (config) {
    return super.getArrayBtnAdd(config)
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
    control.classList.add('form-group')

    const legend = document.createElement('label')
    legend.textContent = config.label

    if (config.srOnly) {
      legend.classList.add('sr-only')
    }

    control.appendChild(legend)

    const inputs = []

    config.values.forEach((value, index) => {
      const radioControl = document.createElement('div')
      radioControl.classList.add('radio')

      const radio = document.createElement('input')
      radio.setAttribute('type', 'radio')
      radio.setAttribute('id', config.id + '/' + index)
      radio.setAttribute('value', value)
      inputs.push(radio)

      const label = document.createElement('label')
      label.setAttribute('for', config.id + '/' + index)

      const labelText = document.createElement('span')

      if (config.titles && config.titles[index]) {
        labelText.textContent = config.titles[index]
      }

      control.appendChild(radioControl)
      radioControl.appendChild(label)
      label.appendChild(radio)
      label.appendChild(labelText)
    })

    return { control, inputs }
  }

  getCheckboxControl (config) {
    const control = document.createElement('div')
    control.classList.add('checkbox')
    control.classList.add('form-group')

    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', config.id)

    const label = document.createElement('label')
    label.setAttribute('for', config.id)

    const labelText = document.createElement('span')
    labelText.textContent = config.label

    if (config.srOnly) {
      labelText.classList.add('sr-only')
    }

    control.appendChild(label)
    label.appendChild(input)
    label.appendChild(labelText)

    return { control, input }
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    control.control.classList.add('form-group')
    control.input.classList.add('form-control')
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
    html.classList.add('text-danger')
    return html
  }
}

export default ThemeBootstrap3
