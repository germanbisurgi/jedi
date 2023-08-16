import Instance from './instance'
import EditorBooleanEnumRadio from '../editors/boolean-enum-radio'
import EditorBooleanEnumSelect from '../editors/boolean-enum-select'
import EditorBoolean from '../editors/boolean'
import { getSchemaFormat, getSchemaType } from '../helpers/schema'

/**
 * Represents a InstanceBoolean instance.
 * @extends Instance
 */
class InstanceBoolean extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const schemaFormat = getSchemaFormat(this.schema)

    if (schemaType === 'boolean' && schemaFormat === 'radio') {
      this.ui = new EditorBooleanEnumRadio(this)
    } else if (schemaType === 'boolean' && schemaFormat === 'select') {
      this.ui = new EditorBooleanEnumSelect(this)
    } else if (schemaType === 'boolean') {
      this.ui = new EditorBoolean(this)
    }
  }
}

export default InstanceBoolean
