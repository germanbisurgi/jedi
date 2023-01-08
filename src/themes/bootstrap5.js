import ThemeBootstrap4 from './bootstrap4'

class ThemeBootstrap5 extends ThemeBootstrap4 {
  getLegend (config) {
    const legend = document.createElement('legend')
    legend.textContent = config.textContent
    legend.setAttribute('style', 'width: auto;')

    if (config.srOnly) {
      legend.classList.add('visually-hidden-focusable')
    }

    return legend
  }
}

export default ThemeBootstrap5
