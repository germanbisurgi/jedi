import Instance from './instance'
import EditorNumberEnumRadio from '../editors/number-enum-radio'
import EditorNumberEnumSelect from '../editors/number-enum-select'
import EditorNumber from '../editors/number'
import { isSet } from '../helpers/utils'
import { getSchemaEnum, getSchemaFormat, getSchemaType } from '../helpers/schema'

/**
 * Represents a InstanceNumber instance.
 * @extends Instance
 */
class InstanceNumber extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const schemaEnum = getSchemaEnum(this.schema)
    const schemaFormat = getSchemaFormat(this.schema)
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'

    if (typeIsNumeric && isSet(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new EditorNumberEnumRadio(this)
    } else if (typeIsNumeric && isSet(schemaEnum)) {
      this.ui = new EditorNumberEnumSelect(this)
    } else if (typeIsNumeric) {
      this.ui = new EditorNumber(this)
    }
  }
}

export default InstanceNumber
