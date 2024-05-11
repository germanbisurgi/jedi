import EditorString from './string.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaEnum, getSchemaOption, getSchemaTitle } from '../helpers/schema.js'

/**
 * Represents a EditorStringEnumSelect instance.
 * @extends Editor
 */
class EditorStringEnumSelect extends EditorString {
  build () {
    this.control = this.theme.getSelectControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })

    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value)
    })
  }
}

export default EditorStringEnumSelect
