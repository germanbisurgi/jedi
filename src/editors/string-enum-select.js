import StringEditor from './string'
import { isSet } from '../utils'

class StringEnumSelectEditor extends StringEditor {
  build () {
    // control
    const control = this.theme.getSelectControl({
      values: this.instance.schema.enum(),
      titles: this.instance.schema.option('enumTitles') || this.optionValues,
      id: this.instance.path,
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle')
    })

    this.control = control.control
    this.input = control.input

    // description
    this.description = this.theme.getDescription({
      textContent: this.instance.schema.description()
    })

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    this.control.appendChild(this.descriptionSlot)
    this.control.appendChild(this.messagesSlot)

    if (isSet(this.instance.schema.description())) {
      this.descriptionSlot.appendChild(this.description)
    }
  }
}

export default StringEnumSelectEditor
