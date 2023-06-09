import ThemeBarebones from './barebones'

class ThemeBootstrap3 extends ThemeBarebones {
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

  getFieldsetFooter () {
    const footer = super.getFieldsetFooter()
    footer.classList.add('panel-footer')
    return footer
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
    const html = super.getChildrenSlot()
    html.classList.add('row')
    return html
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-toggle', 'collapse')
    html.setAttribute('data-target', '#' + config.id)
    html.classList.add('jedi-properties-toggle')
    html.classList.add('pull-right')
    return html
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

  getButtonActiveClass () {
    return 'btn-primary'
  }

  getObjectControl (config) {
    const control = super.getObjectControl(config)
    const { container } = control
    container.classList.add('col-xs-12')
    return control
  }

  getArrayControl (config) {
    const control = super.getArrayControl(config)
    const { container } = control
    container.classList.add('col-xs-12')
    return control
  }

  getArrayItem (config) {
    const control = super.getArrayItem(config)
    const { container } = control
    container.classList.add('col-xs-12')
    return control
  }

  getMultipleControl (config) {
    const control = super.getMultipleControl(config)
    const { container } = control
    container.classList.add('col-xs-12')
    return control
  }

  getNullControl (config) {
    const control = super.getNullControl(config)
    const { container } = control
    container.classList.add('col-xs-12')
    return control
  }

  getTextareaControl (config) {
    const control = super.getTextareaControl(config)
    const { container, input, label } = control
    container.classList.add('col-xs-12')
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('col-xs-12')
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return control
  }

  getRadiosControl (config) {
    const control = super.getRadiosControl(config)
    const { container, radios, labels, labelTexts, radioControls, description, messages } = control

    container.classList.add('col-xs-12')
    container.classList.add('form-group')

    radioControls.forEach((radioControl, index) => {
      radioControl.classList.add('radio')

      container.appendChild(radioControls[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(radios[index])
      labels[index].appendChild(labelTexts[index])
    })

    container.appendChild(description)
    container.appendChild(messages)

    return control
  }

  getCheckboxControl (config) {
    const control = super.getCheckboxControl(config)
    const { container, formGroup, input, label, labelText, description, messages } = control
    container.classList.add('col-xs-12')
    formGroup.classList.add('checkbox')

    container.appendChild(formGroup)
    formGroup.appendChild(label)
    label.appendChild(input)
    label.appendChild(labelText)
    formGroup.appendChild(description)
    formGroup.appendChild(messages)
    return control
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    const { container, input, label } = control
    container.classList.add('col-xs-12')
    container.classList.add('form-group')
    input.classList.add('form-control')

    if (config.srOnly) {
      label.classList.add('sr-only')
    }

    return control
  }

  getSwitcher (config) {
    const control = super.getSwitcher(config)
    const { container, input } = control
    container.classList.remove('form-group')
    input.classList.remove('form-control')
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
