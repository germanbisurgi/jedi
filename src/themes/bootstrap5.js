import Theme from './barebones'

/**
 * Represents a ThemeBootstrap5 instance.
 * @extends Theme
 */
class ThemeBootstrap5 extends Theme {
  getLegend (config) {
    const html = super.getLegend(config)
    html.classList.add('visually-hidden')
    return html
  }

  getCard () {
    const card = super.getCard()
    card.classList.add('card')
    card.classList.add('mb-3')
    return card
  }

  getCardHeader (config) {
    const html = super.getCardHeader(config)
    html.classList.add('card-header')
    html.classList.add('d-flex')
    html.classList.add('justify-content-between')
    html.classList.add('align-items-center')
    html.classList.add('py-1')
    return html
  }

  getCardBody () {
    const html = super.getCardBody()
    html.classList.add('card-body')
    html.classList.add('pb-0')
    return html
  }

  getFooter () {
    const footer = super.getFooter()
    footer.classList.add('card-footer')
    return footer
  }

  getPropertiesSlot (config) {
    const html = super.getPropertiesSlot()
    html.classList.add('collapse')
    html.setAttribute('id', config.id)
    return html
  }

  getArrayActionsSlot () {
    const html = super.getArrayActionsSlot()
    html.classList.add('btn-group')
    html.classList.add('float-end')
    return html
  }

  getControlSlot () {
    const controlSlot = super.getControlSlot()
    controlSlot.classList.add('mb-3')
    return controlSlot
  }

  getPropertiesToggle (config) {
    const html = this.getButton(config)
    html.setAttribute('data-bs-toggle', 'collapse')
    html.setAttribute('data-bs-target', '#' + config.id)
    html.classList.add('jedi-properties-toggle')
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
    html.classList.add('btn-sm')
    return html
  }

  getButtonActiveClass () {
    return 'btn-primary'
  }

  getDescription (config) {
    const description = super.getDescription(config)
    description.classList.add('form-text')
    return description
  }

  getTextareaControl (config) {
    const control = super.getTextareaControl(config)
    const { container, input, label } = control
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.srOnly) {
      label.classList.add('visually-hidden')
    }

    return control
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.srOnly) {
      label.classList.add('visually-hidden')
    }

    return control
  }

  getRadiosControl (config) {
    const control = super.getRadiosControl(config)
    const { container, fieldset, radios, labels, labelTexts, radioControls, description, messages } = control

    container.classList.add('mb-3')

    radioControls.forEach((radioControl, index) => {
      radioControl.classList.add('form-check')
      radios[index].classList.add('form-check-input')
      labels[index].classList.add('form-check-label')

      fieldset.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    fieldset.appendChild(description)
    fieldset.appendChild(messages)

    return control
  }

  getCheckboxControl (config) {
    const control = super.getCheckboxControl(config)
    const { container, formGroup, input, label, description, messages } = control
    container.classList.add('mb-3')
    formGroup.classList.add('form-check')
    input.classList.add('form-check-input')
    label.classList.add('form-check-label')

    if (config.srOnly) {
      label.classList.add('visually-hidden')
    }

    container.appendChild(formGroup)
    formGroup.appendChild(input)
    formGroup.appendChild(label)
    formGroup.appendChild(description)
    formGroup.appendChild(messages)
    return control
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    const { container, input } = control
    container.classList.add('mb-3')
    input.classList.add('form-select')
    return control
  }

  getSwitcher (config) {
    const control = super.getSwitcher(config)
    const { container, input, label } = control
    container.classList.remove('mb-3')
    input.classList.remove('form-select')
    label.classList.add('visually-hidden')
    return control
  }

  getAlert (config) {
    const html = super.getAlert(config)
    html.classList.add('alert')
    html.classList.add('alert-danger')
    return html
  }

  getInvalidFeedback (config) {
    const html = super.getInvalidFeedback(config)
    html.classList.add('text-danger')
    html.classList.add('d-block')
    html.classList.add('form-text')
    return html
  }

  getRow () {
    const row = super.getRow()
    row.classList.add('row')
    return row
  }

  getCol (xs, md, offsetMd) {
    const col = super.getRow(xs, md, offsetMd)
    col.classList.add('col-' + xs)
    col.classList.add('col-md-' + md)

    if (offsetMd) {
      col.classList.add('offset-md-' + offsetMd)
    }

    return col
  }

  getTabList (config) {
    const tabList = super.getTabList(config)
    tabList.classList.add('nav')

    if (config.type === 'tabs') {
      tabList.classList.add('nav-tabs')
    } else {
      tabList.classList.add('nav-pills')
    }

    tabList.classList.add('flex-column')

    if (config.stacked === false) {
      tabList.classList.remove('flex-column')
    }

    return tabList
  }

  getTab (config) {
    const tab = super.getTab(config)
    tab.list.classList.add('nav-item')

    tab.link.classList.add('nav-link')
    tab.link.setAttribute('data-bs-toggle', 'tab')

    if (config.active) {
      tab.link.classList.add('active')
    }

    return tab
  }

  setTabPaneAttributes (element, active, id) {
    super.setTabPaneAttributes(element, active, id)
    element.classList.add('tab-pane')

    if (active) {
      element.classList.add('active')
    }
  }
}

export default ThemeBootstrap5
