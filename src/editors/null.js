import Editor from './editor'
import { isSet } from '../utils'

class NullEditor extends Editor {
  build () {
    // appends
    this.description = this.theme.getDescription({
      textContent: this.instance.schema.description()
    })

    if (isSet(this.instance.schema.description())) {
      this.container.appendChild(this.description)
    }
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.controlSlot)
  }

  sanitize (value) {
    return null
  }
}

export default NullEditor
