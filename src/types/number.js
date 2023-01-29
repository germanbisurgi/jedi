import Instance from '../instance'
import NumberEnumRadioEditor from '../editors/number-enum-radio'
import NumberEnumSelectEditor from '../editors/number-enum-select'
import NumberEditor from '../editors/number'

class NumberInstance extends Instance {
  setUI () {
    if (this.schema.typeIsNumeric() && this.schema.enum() && this.schema.formatIs('radio')) {
      this.ui = new NumberEnumRadioEditor(this)
    } else if (this.schema.typeIsNumeric() && this.schema.enum()) {
      this.ui = new NumberEnumSelectEditor(this)
    } else if (this.schema.typeIsNumeric()) {
      this.ui = new NumberEditor(this)
    }
  }

  sanitize (value) {
    if (this.schema.typeIs('integer')) {
      return Math.floor(Number(value))
    } else {
      return Number(value)
    }
  }
}

export default NumberInstance
