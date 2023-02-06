import Editor from './editor'
import { isSet } from '../utils'

class NullEditor extends Editor {
  build () {
    this.container.appendChild(this.messagesSlot)
    this.container.appendChild(this.controlSlot)

    // description
    if (isSet(this.instance.schema.description())) {
      this.container.appendChild(this.theme.getDescription({
        textContent: this.instance.schema.description()
      }))
    }
  }

  sanitize (value) {
    return null
  }
}

export default NullEditor
