import Instance from './instance'
import StringEditor from '../editors/string'
import StringEnumRadioEditor from '../editors/string-enum-radio'
import StringEnumSelectEditor from '../editors/string-enum-select'

class StringInstance extends Instance {
  setUI () {
    if (this.schema.typeIs('string') && this.schema.enum() && this.schema.formatIs('radio')) {
      this.ui = new StringEnumRadioEditor(this)
    } else if (this.schema.typeIs('string') && this.schema.enum()) {
      this.ui = new StringEnumSelectEditor(this)
    } else if (this.schema.typeIs('string')) {
      this.ui = new StringEditor(this)
    }
  }

  sanitize (value) {
    return String(value)
  }
}

export default StringInstance
