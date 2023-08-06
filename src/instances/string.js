import Instance from './instance'
import EditorString from '../editors/string'
import EditorStringEnumRadio from '../editors/string-enum-radio'
import EditorStringEnumSelect from '../editors/string-enum-select'
import { isSet } from '../utils'

/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
class InstanceString extends Instance {
  setUI () {
    if (this.schema.typeIs('string') && isSet(this.schema.enum()) && this.schema.formatIs('radio')) {
      this.ui = new EditorStringEnumRadio(this)
    } else if (this.schema.typeIs('string') && isSet(this.schema.enum())) {
      this.ui = new EditorStringEnumSelect(this)
    } else if (this.schema.typeIs('string')) {
      this.ui = new EditorString(this)
    }
  }
}

export default InstanceString
