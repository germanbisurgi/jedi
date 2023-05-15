import ThemeBarebones from './barebones'

class ThemeWireframe extends ThemeBarebones {
  getAlert (config) {
    const error = super.getAlert(config)
    error.classList.add('alert')
    error.classList.add('alert-danger')
    return error
  }

  getInvalidFeedback (config) {
    const invalidFeedback = super.getInvalidFeedback(config)
    invalidFeedback.classList.add('invalid-feedback')
    return invalidFeedback
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

  getFieldset () {
    const html = document.createElement('div')
    html.classList.add('card')
    return html
  }

  getContainerHead (config) {
    const html = document.createElement('div')
    html.textContent = config.textContent
    html.classList.add('card-header')

    if (config.srOnly) {
      html.classList.add('sr-only')
    }

    return html
  }

  getButtonActiveClass () {
    return 'btn-info'
  }
}

export default ThemeWireframe
