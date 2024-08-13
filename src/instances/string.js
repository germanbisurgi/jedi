import Instance from './instance.js'
import EditorString from '../editors/string.js'
import EditorStringEnumRadio from '../editors/string-enum-radio.js'
import EditorStringEnumSelect from '../editors/string-enum-select.js'
import EditorStringTextarea from '../editors/string-textarea.js'
import EditorStringAwesomplete from '../editors/string-awesomplete.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaEnum, getSchemaFormat, getSchemaXOption, getSchemaType } from '../helpers/schema.js'

/**
 * Represents a InstanceString instance.
 * @extends Instance
 */
class InstanceString extends Instance {
  setUI () {
    const schemaType = getSchemaType(this.schema)
    const schemaEnum = getSchemaEnum(this.schema)
    const schemaFormat = getSchemaFormat(this.schema)
    const awesomplete = getSchemaXOption(this.schema, 'awesomplete')

    if (schemaType === 'string' && isSet(schemaEnum) && schemaFormat === 'radio') {
      this.ui = new EditorStringEnumRadio(this)
    } else if (schemaType === 'string' && schemaFormat === 'textarea') {
      this.ui = new EditorStringTextarea(this)
    } else if (schemaType === 'string' && isSet(schemaEnum)) {
      this.ui = new EditorStringEnumSelect(this)
    } else if (schemaType === 'string' && isSet(awesomplete)) {
      this.ui = new EditorStringAwesomplete(this)
    } else if (schemaType === 'string') {
      this.ui = new EditorString(this)
    }
  }
}

export default InstanceString
