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

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    if (isSet(this.instance.schema.description())) {
      this.control.appendChild(this.description)
    }
    this.control.appendChild(this.messagesSlot)
  }
}

export default StringEnumSelectEditor
