import ThemeBarebones from './barebones'

class ThemeBootstrap4 extends ThemeBarebones {
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

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-toggle', 'collapse')
    html.setAttribute('data-target', '#' + config.id)
    html.classList.add('jedi-properties-toggle')
    return html
  }

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot()
    html.classList.add('collapse')
    html.setAttribute('id', config.id)
    return html
  }

  getChildrenSlot () {
    return super.getChildrenSlot()
  }

  getCheckboxLabel (config) {
    const html = super.getCheckboxLabel(config)
    html.classList.add('form-check-label')
    return html
  }

  getRadioLabel (config) {
    const html = super.getRadioLabel(config)
    html.classList.add('form-check-label')
    return html
  }

  getControlSlot () {
    const html = super.getControlSlot()
    html.classList.add('form-group')
    return html
  }

  getCheckboxContainer () {
    const html = super.getCheckboxContainer()
    html.classList.add('form-check')
    return html
  }

  getRadioContainer () {
    const html = super.getRadioContainer()
    html.classList.add('form-check')
    return html
  }

  getCheckbox (config) {
    const html = super.getCheckbox(config)
    html.classList.add('form-check-input')
    return html
  }

  getRadio (config) {
    const html = super.getRadio(config)
    html.classList.add('form-check-input')
    return html
  }

  getInput (config) {
    const html = super.getInput(config)
    html.classList.add('form-control')
    return html
  }

  getTextarea (config) {
    const html = super.getTextarea(config)
    html.classList.add('form-control')
    return html
  }

  getSelect (config) {
    const html = super.getSelect(config)
    html.classList.add('form-control')
    return html
  }

  getRadiosControl (config) {
    // control
    const control = document.createElement('div')

    // legend
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
    // control
    const control = document.createElement('div')
    control.classList.add('form-check')

    // input
    const input = document.createElement('input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', config.id)
    input.classList.add('form-check-input')

    // label
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
    control.input.classList.add('form-control')
    return control
  }

  getButtonActiveClass () {
    return 'btn-primary'
  }
}

export default ThemeBootstrap4
