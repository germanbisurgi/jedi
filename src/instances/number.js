import Instance from './instance.js'
import EditorNumberEnumRadio from '../editors/number-enum-radio.js'
import EditorNumberEnumSelect from '../editors/number-enum-select.js'
import EditorNumber from '../editors/number.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaEnum, getSchemaFormat, getSchemaType } from '../helpers/schema.js'

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
