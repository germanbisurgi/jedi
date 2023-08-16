import Instance from './instance'
import EditorString from '../editors/string'
import EditorStringEnumRadio from '../editors/string-enum-radio'
import EditorStringEnumSelect from '../editors/string-enum-select'
import EditorStringTextarea from '../editors/string-textarea'
import { isSet } from '../helpers/utils'
import { getSchemaEnum, getSchemaFormat, getSchemaType } from '../helpers/schema'

/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
class InstanceString extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const schemaEnum = getSchemaEnum(this.schema)
    const schemaFormat = getSchemaFormat(this.schema)

    if (schemaType === 'string' && isSet(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new EditorStringEnumRadio(this)
    } else if (schemaType === 'string' && schemaFormat === 'textarea') {
      this.ui = new EditorStringTextarea(this)
    } else if (schemaType === 'string' && isSet(schemaEnum)) {
      this.ui = new EditorStringEnumSelect(this)
    } else if (schemaType === 'string') {
      this.ui = new EditorString(this)
    }
  }
}

export default InstanceString
