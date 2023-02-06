import BooleanEditor from './boolean'
import { isSet } from '../utils'

class BooleanEnumSelectEditor extends BooleanEditor {
  build () {
    // label
    this.label = this.theme.getLabel({
      for: this.instance.path,
      textContent: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    // input
    this.input = this.theme.getSelect({
      optionValues: ['false', 'true'],
      optionsLabels: this.instance.schema.option('enumTitles') || ['false', 'true'],
      id: this.instance.path
    })

    this.input.addEventListener('change', () => {
      const value = this.input.value === 'true'
      this.instance.setValue(value)
    })

    // description
    if (isSet(this.instance.schema.description())) {
      this.controlSlot.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }

    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.label)
    this.controlSlot.appendChild(this.input)
    this.controlSlot.appendChild(this.messagesSlot)
  }

  refreshUI () {
    this.input.value = this.instance.getValue() === true ? 'true' : 'false'

    if (this.disabled) {
      this.input.setAttribute('disabled', 'disabled')
    } else {
      this.input.removeAttribute('disabled')
    }
  }
}

export default BooleanEnumSelectEditor
