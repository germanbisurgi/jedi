import Editor from './editor'
import { isSet } from '../utils'

class NullEditor extends Editor {
  build () {
    // appends
    this.container.appendChild(this.descriptionSlot)
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.controlSlot)

    if (isSet(this.instance.schema.description())) {
      this.container.appendChild(this.description)
    }
  }

  sanitize (value) {
    return null
  }
}

export default NullEditor
