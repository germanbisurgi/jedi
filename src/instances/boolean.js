import Instance from './instance.js'
import EditorBooleanEnumRadio from '../editors/boolean-enum-radio.js'
import EditorBooleanEnumSelect from '../editors/boolean-enum-select.js'
import EditorBooleanCheckbox from '../editors/boolean.js'
import { getSchemaFormat, getSchemaType } from '../helpers/schema.js'

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
    } else if (schemaType === 'boolean' && schemaFormat === 'checkbox') {
      this.ui = new EditorBooleanCheckbox(this)
    } else if (schemaType === 'boolean') {
      this.ui = new EditorBooleanEnumSelect(this)
    }
  }
}

export default InstanceBoolean
