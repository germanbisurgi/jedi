import Editor from './editor'
import { isSet, pathToAttribute } from '../utils'

class NullEditor extends Editor {
  build () {
    this.control = this.theme.getNullControl({
      id: pathToAttribute(this.instance.path),
      label: isSet(this.instance.schema.title()) ? this.instance.schema.title() : this.instance.getKey(),
      srOnly: this.instance.schema.option('hideTitle') || this.instance.schema.formatIs('hidden'),
      description: this.instance.schema.description()
    })
  }

  sanitize (value) {
    return null
  }
}

export default NullEditor
