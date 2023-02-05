import Instance from './instance'
import BooleanEnumRadioEditor from '../editors/boolean-enum-radio'
import BooleanEnumSelectEditor from '../editors/boolean-enum-select'
import BooleanEditor from '../editors/boolean'

class BooleanInstance extends Instance {
  setUI () {
    if (this.schema.typeIs('boolean') && this.schema.formatIs('radio')) {
      this.ui = new BooleanEnumRadioEditor(this)
    } else if (this.schema.typeIs('boolean') && this.schema.formatIs('select')) {
      this.ui = new BooleanEnumSelectEditor(this)
    } else if (this.schema.typeIs('boolean')) {
      this.ui = new BooleanEditor(this)
    }
  }
}

export default BooleanInstance
