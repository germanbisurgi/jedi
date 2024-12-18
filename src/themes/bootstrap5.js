import Theme from './theme.js'
import { isObject, isString } from '../helpers/utils.js'

/**
 * Represents a ThemeBootstrap5 instance.
 * @extends Theme
 */
class ThemeBootstrap5 extends Theme {
  init () {
    this.useToggleEvents = false
  }

  getAddPropertyButton () {
    const btn = super.getAddPropertyButton()
    btn.classList.add('btn-primary')
    btn.classList.add('w-100')
    return btn
  }

  getCollapseToggle (config) {
    const toggle = super.getCollapseToggle(config)
    toggle.setAttribute('href', '#' + config.collapseId)
    toggle.setAttribute('data-bs-toggle', 'collapse')
    return toggle
  }

  getCollapse (config) {
    const collapse = super.getCollapse(config)
    collapse.classList.add('collapse')

    if (!config.startCollapsed) {
      collapse.classList.add('show')
    }

    return collapse
  }

  getFieldset () {
    const fieldset = document.createElement('fieldset')
    fieldset.classList.add('card')
    fieldset.classList.add('mb-3')
    return fieldset
  }

  getLegend (config) {
    const superLegend = super.getLegend(config)
    const { legend, legendText } = superLegend
    legendText.style.fontSize = this.defaultFontSize
    legend.classList.add('card-header')
    legend.classList.add('d-flex')
    legend.classList.add('justify-content-between')
    legend.classList.add('align-items-center')
    legend.classList.add('py-2')
    return superLegend
  }

  getRadioLegend (config) {
    const superRadioLegend = super.getRadioLegend(config)
    const { legendText } = superRadioLegend
    legendText.style.fontSize = this.defaultFontSize
    return superRadioLegend
  }

  getLabel (config) {
    const labelObj = super.getLabel(config)

    if (labelObj.icon.classList) {
      labelObj.icon.classList.add('me-1')
    }

    return labelObj
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
    html.classList.add('justify-content-end')
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

  getControlSlot () {
    const controlSlot = super.getControlSlot()
    controlSlot.classList.add('mb-3')
    return controlSlot
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

  getDescription (config) {
    const description = super.getDescription(config)
    description.classList.add('text-muted')
    description.classList.add('mb-1')
    return description
  }

  getTextareaControl (config) {
    const control = super.getTextareaControl(config)
    const { container, input, label } = control
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  adaptForTableTextareaControl (control) {
    super.adaptForTableTextareaControl(control)
    control.container.classList.remove('mb-3')
  }

  getInputControl (config) {
    const control = super.getInputControl(config)
    const { container, input, label } = control
    container.classList.add('mb-3')
    input.classList.add('form-control')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    return control
  }

  adaptForTableInputControl (control, td) {
    super.adaptForTableInputControl(control, td)
    control.container.classList.remove('mb-3')
  }

  getRadiosControl (config) {
    const control = super.getRadiosControl(config)
    const { container, fieldset, radios, labels, labelTexts, radioControls, description, messages } = control

    container.classList.add('mb-3')

    radioControls.forEach((radioControl, index) => {
      radioControl.classList.add('form-check')
      radios[index].classList.add('form-check-input')
      labels[index].classList.add('form-check-label')

      if (config.inline) {
        radioControl.classList.add('form-check-inline')
      }

      fieldset.appendChild(radioControls[index])
      radioControl.appendChild(radios[index])
      radioControl.appendChild(labels[index])
      labels[index].appendChild(labelTexts[index])
    })

    fieldset.appendChild(description)
    fieldset.appendChild(messages)

    return control
  }

  adaptForTableRadiosControl (control, td) {
    super.adaptForTableRadiosControl(control, td)
    control.container.classList.remove('mb-3')
    control.fieldset.classList.remove('card')
    control.fieldset.classList.remove('mb-3')
  }

  getCheckboxesControl (config) {
    const control = super.getCheckboxesControl(config)
    const { checkboxes, labels, checkboxControls } = control

    checkboxControls.forEach((checkboxControl, index) => {
      checkboxControl.classList.add('mb-3')
      checkboxControl.classList.add('form-check')
      checkboxes[index].classList.add('form-check-input')
      labels[index].classList.add('form-check-label')
    })

    return control
  }

  getCheckboxControl (config) {
    const control = super.getCheckboxControl(config)
    const { container, formGroup, input, label, infoButton, description, messages } = control
    container.classList.add('mb-3')
    formGroup.classList.add('form-check')
    input.classList.add('form-check-input')
    label.classList.add('form-check-label')

    if (config.titleHidden) {
      this.visuallyHidden(label)
    }

    container.appendChild(formGroup)
    formGroup.appendChild(input)
    formGroup.appendChild(label)

    if (isObject(config.infoButton)) {
      formGroup.appendChild(infoButton.container)
    }

    container.appendChild(description)
    container.appendChild(messages)
    return control
  }

  adaptForTableCheckboxControl (control, td) {
    super.adaptForTableCheckboxControl(control, td)
    control.container.classList.remove('mb-3')
    control.formGroup.classList.remove('form-check')
  }

  getSelectControl (config) {
    const control = super.getSelectControl(config)
    const { container, input } = control
    container.classList.add('mb-3')
    input.classList.add('form-select')
    return control
  }

  adaptForTableSelectControl (control, td) {
    super.adaptForTableSelectControl(control, td)
    control.container.classList.remove('mb-3')
  }

  adaptForTableMultipleControl (control, td) {
    super.adaptForTableMultipleControl(control, td)
    control.card.classList.remove('mb-3')
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

    if (config.variant === 'tabs') {
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

  /**
   * A simple table layout
   */
  getTable () {
    const container = document.createElement('div')
    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    container.classList.add('table-responsive')
    table.classList.add('table')
    table.classList.add('table-sm')
    table.classList.add('align-middle')

    table.appendChild(thead)
    table.appendChild(tbody)
    container.appendChild(table)

    return { container, table, thead, tbody }
  }

  setTabPaneAttributes (element, active, id) {
    super.setTabPaneAttributes(element, active, id)
    element.classList.add('tab-pane')

    if (active) {
      element.classList.add('active')
    }
  }

  infoButtonAsModal (infoButton, id, config = {}) {
    const modal = document.createElement('div')
    const modalDialog = document.createElement('div')
    const modalContent = document.createElement('div')
    const modalHeader = document.createElement('div')
    const modalTitle = document.createElement('div')
    const modalBody = document.createElement('div')
    const closeBtn = this.getButton({
      textContent: 'Close',
      icon: 'close'
    })
    const modalId = id + '-modal'

    modal.setAttribute('role', 'dialog')
    modal.setAttribute('id', modalId)
    closeBtn.setAttribute('data-bs-dismiss', 'modal')
    infoButton.infoButton.setAttribute('data-bs-toggle', 'modal')
    infoButton.infoButton.setAttribute('data-bs-target', '#' + modalId)
    infoButton.container.classList.add('ms-1')
    modal.classList.add('modal')
    modal.classList.add('fade')
    modalDialog.classList.add('modal-dialog')
    modalContent.classList.add('modal-content')
    modalHeader.classList.add('modal-header')
    modalTitle.classList.add('modal-title')
    modalBody.classList.add('modal-body')
    closeBtn.classList.add('jedi-modal-close')

    if (isString(config.title)) {
      modalTitle.innerHTML = this.purifyContent(config.title)
    }

    if (isString(config.content)) {
      modalBody.innerHTML = this.purifyContent(config.content)
    }

    infoButton.container.appendChild(modal)
    modal.appendChild(modalDialog)
    modalDialog.appendChild(modalContent)
    modalContent.appendChild(modalHeader)
    modalHeader.appendChild(modalTitle)
    modalHeader.appendChild(closeBtn)
    modalContent.appendChild(modalBody)
  }

  visuallyHidden (element) {
    element.classList.add('visually-hidden')
  }

  visuallyVisible (element) {
    element.classList.remove('visually-hidden')
  }
}

export default ThemeBootstrap5
