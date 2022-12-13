import BooleanEditor from './boolean'
import utils from '../utils'

class BooleanEnumSelectEditor extends BooleanEditor {
  build () {
    // label
    this.container.appendChild(this.jedi.theme.getLabel({
      for: this.path,
      textContent: utils.getSchemaTitle(this.schema) || this.getKey()
    }))

    // input
    const optionValues = ['false', 'true']
    const optionsLabels = utils.getSchemaEnumTitles(this.schema) || optionValues
    this.input = this.jedi.theme.getSelect(optionValues, optionsLabels, {
      id: this.path
    })
    this.container.appendChild(this.input)

    // events
    this.input.addEventListener('change', () => {
      const value = this.input.value === 'true'
      this.setValue(value)
    })

    // description
    const description = this.jedi.theme.getDescriptionContainer(this.schema.description)
    this.container.appendChild(description)
  }

  refreshUI () {
    this.input.value = this.getValue() === true ? 'true' : 'false'

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEnumSelectEditor
