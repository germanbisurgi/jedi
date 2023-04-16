import ThemeBarebones from './barebones'

class ThemeBootstrap3 extends ThemeBarebones {
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
    btnGroup.classList.add('mb-3')
    return btnGroup
  }

  getButton (config) {
    const button = super.getButton(config)
    button.classList.add('btn')
    button.classList.add('btn-default')
    return button
  }

  getToolbarSlot () {
    const html = super.getToolbarSlot()
    html.classList.add('nav')
    return html
  }

  getFieldset () {
    const fieldset = super.getFieldset()
    fieldset.classList.add('card')
    fieldset.classList.add('card-body')
    fieldset.classList.add('mb-3')
    fieldset.classList.add('py-0')
    return fieldset
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

export default ThemeBootstrap3
