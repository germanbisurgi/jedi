import Editor from '../editor'
import utils from '../utils'

class NullEditor extends Editor {
  build () {
    // label
    const labelText = utils.getSchemaTitle(this.schema) || this.getKey()
    const label = this.jedi.theme.getLabel(labelText, {
      for: this.path
    })
    this.container.appendChild(label)
  }

  sanitize (value) {
    return null
  }
}

export default NullEditor
