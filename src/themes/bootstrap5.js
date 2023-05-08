import ThemeBootstrap4 from './bootstrap4'

class ThemeBootstrap5 extends ThemeBootstrap4 {
  getLabel (config) {
    const html = super.getLabel(config)
    html.classList.add('form-label')
    return html
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-bs-toggle', 'collapse')
    html.setAttribute('data-bs-target', '#' + config.id)
    html.classList.add('jedi-properties-toggle')
    return html
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    control.control.classList.add('form-group')
    control.input.classList.add('form-select')
    return control
  }
}

export default ThemeBootstrap5
