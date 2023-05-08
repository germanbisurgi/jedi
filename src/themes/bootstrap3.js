import ThemeBarebones from './barebones'

class ThemeBootstrap3 extends ThemeBarebones {
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
    const html = super.getControlSlot()
    html.classList.add('form-group')
    return html
  }

  getCheckboxContainer () {
    const html = super.getCheckboxContainer()
    html.classList.add('form-check')
    return html
  }

  getInput (config) {
    const html = super.getInput(config)
    html.classList.add('form-control')
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

export default ThemeBootstrap3
