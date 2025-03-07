import EditorString from './string.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaEnum, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringSelect instance.
 * @extends EditorString
 */
class EditorStringSelect extends EditorString {
  static resolves (schema) {
    return getSchemaType(schema) === 'string' && isSet(getSchemaEnum(schema))
  }

  build () {
    this.control = this.theme.getSelectControl({
      title: this.getTitle(),
      description: this.getDescription(),
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, 'titleIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      info: this.getInfo()
    })
  }

  adaptForTable () {
    this.theme.adaptForTableSelectControl(this.control)
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value, true, 'user')
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.control.input.value = this.instance.getValue()
  }
}

export default EditorStringSelect
