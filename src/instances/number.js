import Instance from './instance'
import EditorNumberEnumRadio from '../editors/number-enum-radio'
import EditorNumberEnumSelect from '../editors/number-enum-select'
import EditorNumber from '../editors/number'
import { isSet } from '../utils'

/**
 * Represents a InstanceNumber instance.
 * @extends Instance
 */
class InstanceNumber extends Instance {
  setUI () {
    if (this.schema.typeIsNumeric() && isSet(this.schema.enum()) && this.schema.formatIs('radio')) {
      this.ui = new EditorNumberEnumRadio(this)
    } else if (this.schema.typeIsNumeric() && isSet(this.schema.enum())) {
      this.ui = new EditorNumberEnumSelect(this)
    } else if (this.schema.typeIsNumeric()) {
      this.ui = new EditorNumber(this)
    }
  }
}

export default InstanceNumber
