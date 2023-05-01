import ThemeBootstrap4 from './bootstrap4'

class ThemeBootstrap5 extends ThemeBootstrap4 {
  getLabel (config) {
    const label = super.getLabel(config)
    label.classList.add('form-label')
    return label
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-bs-toggle', 'collapse')
    html.setAttribute('data-bs-target', '#' + config.id)
    html.classList.add('jedi-properties-toggle')
    return html
  }
}

export default ThemeBootstrap5
