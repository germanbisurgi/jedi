import NumberEditor from './number'
import { isSet } from '../utils'

class NumberEnumSelectEditor extends NumberEditor {
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

    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control)
    this.control.appendChild(this.messagesSlot)

    // events
    this.input.addEventListener('change', () => {
      this.instance.setValue(this.input.value)
    })

    // description
    if (isSet(this.instance.schema.description())) {
      this.controlSlot.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }
}

export default NumberEnumSelectEditor
