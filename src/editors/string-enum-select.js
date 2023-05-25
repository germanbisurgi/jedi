import StringEditor from './string'
import { isSet, pathToAttribute } from '../utils'

class StringEnumSelectEditor extends StringEditor {
  build () {
    // control
    this.control = this.theme.getSelectControl({
      values: this.instance.schema.enum(),
      titles: this.instance.schema.option('enumTitles') || this.instance.schema.enum(),
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle'),
      description: this.instance.schema.description()
    })

    // events
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })

    this.container.appendChild(this.controlSlot)
    this.controlSlot.appendChild(this.control.container)
    this.control.container.appendChild(this.messagesSlot)
  }
}

export default StringEnumSelectEditor
