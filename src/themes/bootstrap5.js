import ThemeBootstrap4 from './bootstrap4'

class ThemeBootstrap5 extends ThemeBootstrap4 {
  getLegend (config) {
    const legend = super.getLegend(config)

    legend.classList.add('my-3')

    if (config.srOnly) {
      legend.classList.add('visually-hidden-focusable')
    }

    return legend
  }

  getControlSlot () {
    const group = super.getControlSlot()
    group.classList.add('mb-3')
    return group
  }

  getLabel (config) {
    const label = super.getLabel(config)
    label.classList.add('form-label')
    return label
  }
}

export default ThemeBootstrap5
