import ThemeBarebones from './barebones'

class ThemeWireframe extends ThemeBarebones {
  getAlert (config) {
    const error = super.getAlert(config)
    error.classList.add('alert')
    error.classList.add('alert-danger')
    return error
  }

  getBtnGroup () {
    const btnGroup = super.getBtnGroup()
    btnGroup.classList.add('btn-group')
    return btnGroup
  }

  getButton (config) {
    const button = super.getButton(config)
    button.classList.add('btn')
    return button
  }

  getControlSlot () {
    const controlSlot = super.getControlSlot()
    controlSlot.classList.add('form-group')
    return controlSlot
  }

  getCheckboxContainer () {
    const checkboxContainer = super.getCheckboxContainer()
    checkboxContainer.classList.add('form-group')
    return checkboxContainer
  }

  getFieldset () {
    const fieldset = super.getFieldset()
    fieldset.classList.add('card')
    fieldset.classList.add('card-body')
    return fieldset
  }

  getCheckboxLabel (config) {
    const checkboxLabel = super.getCheckboxLabel(config)
    checkboxLabel.classList.add('form-check-label')
    return checkboxLabel
  }

  getCheckbox (config) {
    const checkbox = super.getCheckbox(config)
    checkbox.classList.add('form-check-input')
    return checkbox
  }

  getRadioContainer () {
    const radioContainer = super.getRadioContainer()
    radioContainer.classList.add('form-check')
    radioContainer.classList.add('form-check-inline')
    return radioContainer
  }

  getRadioLabel (config) {
    const radioLabel = super.getRadioLabel(config)
    radioLabel.classList.add('form-check-label')
    return radioLabel
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
}

export default ThemeWireframe
