import Instance from './instance'
import EditorBooleanEnumRadio from '../editors/boolean-enum-radio'
import EditorBooleanEnumSelect from '../editors/boolean-enum-select'
import EditorBoolean from '../editors/boolean'

/**
 * Represents a InstanceBoolean instance.
 * @extends Instance
 */
class InstanceBoolean extends Instance {
  setUI () {
    if (this.schema.typeIs('boolean') && this.schema.formatIs('radio')) {
      this.ui = new EditorBooleanEnumRadio(this)
    } else if (this.schema.typeIs('boolean') && this.schema.formatIs('select')) {
      this.ui = new EditorBooleanEnumSelect(this)
    } else if (this.schema.typeIs('boolean')) {
      this.ui = new EditorBoolean(this)
    }
  }
}

export default InstanceBoolean
