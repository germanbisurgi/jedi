import Instance from './instance'
import NumberEnumRadioEditor from '../editors/number-enum-radio'
import NumberEnumSelectEditor from '../editors/number-enum-select'
import NumberEditor from '../editors/number'
import { isSet } from '../utils'

class NumberInstance extends Instance {
  setUI () {
    if (this.schema.typeIsNumeric() && isSet(this.schema.enum()) && this.schema.formatIs('radio')) {
      this.ui = new NumberEnumRadioEditor(this)
    } else if (this.schema.typeIsNumeric() && isSet(this.schema.enum())) {
      this.ui = new NumberEnumSelectEditor(this)
    } else if (this.schema.typeIsNumeric()) {
      this.ui = new NumberEditor(this)
    }
  }
}

export default NumberInstance
