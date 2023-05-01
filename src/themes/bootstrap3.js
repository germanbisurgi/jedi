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
    invalidFeedback.classList.add('text-danger')
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

  getActionsSlot () {
    const html = super.getActionsSlot()
    html.classList.add('pull-right')
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

  getChildrenSlot () {
    return super.getChildrenSlot()
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

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot()
    html.classList.add('collapse')
    html.classList.add('panel-body')
    html.setAttribute('id', config.id)
    return html
  }

  getLabel (config) {
    return super.getLabel(config)
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

  getLegend (config) {
    const html = super.getLegend(config)
    html.classList.add('panel-heading')
    html.classList.add('pull-right')
    return html
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
