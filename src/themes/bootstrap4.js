import ThemeBarebones from './barebones'

class ThemeBootstrap4 extends ThemeBarebones {
  getAlert (config) {
    const alert = super.getAlert(config)
    alert.classList.add('alert')
    alert.classList.add('alert-danger')
    return alert
  }

  getInvalidFeedback (config) {
    const invalidFeedback = super.getInvalidFeedback(config)
    invalidFeedback.classList.add('invalid-feedback')
    invalidFeedback.classList.add('d-block')
    return invalidFeedback
  }

  getBtnGroup () {
    const btnGroup = super.getBtnGroup()
    btnGroup.classList.add('btn-group')
    return btnGroup
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
    html.classList.add('card-body')
    html.setAttribute('id', config.id)
    return html
  }

  getChildrenSlot () {
    return super.getChildrenSlot()
  }

  getCheckboxLabel (config) {
    const checkboxLabel = super.getCheckboxLabel(config)
    checkboxLabel.classList.add('form-check-label')
    return checkboxLabel
  }

  getRadioLabel (config) {
    const radioLabel = super.getRadioLabel(config)
    radioLabel.classList.add('form-check-label')
    return radioLabel
  }

  getControlSlot () {
    const controlSlot = super.getControlSlot()
    controlSlot.classList.add('form-group')
    return controlSlot
  }

  getCheckboxContainer () {
    const checkboxContainer = super.getCheckboxContainer()
    checkboxContainer.classList.add('form-check')
    return checkboxContainer
  }

  getRadioContainer () {
    const radioContainer = super.getRadioContainer()
    radioContainer.classList.add('form-check')
    return radioContainer
  }

  getCheckbox (config) {
    const checkbox = super.getCheckbox(config)
    checkbox.classList.add('form-check-input')
    return checkbox
  }

  getRadio (config) {
    const radio = super.getRadio(config)
    radio.classList.add('form-check-input')
    return radio
  }

  getTextarea (config) {
    const textarea = super.getTextarea(config)
    textarea.classList.add('form-control')
    return textarea
  }

  getSelect (config) {
    const select = super.getSelect(config)
    select.classList.add('form-control')
    return select
  }

  getButtonActiveClass () {
    return 'btn-primary'
  }
}

export default ThemeBootstrap4
