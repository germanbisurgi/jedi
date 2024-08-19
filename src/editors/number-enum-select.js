import EditorNumber from './number.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaEnum, getSchemaTitle, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorNumberEnumSelect instance.
 * @extends EditorNumber
 */
class EditorNumberEnumSelect extends EditorNumber {
  build () {
    this.control = this.theme.getSelectControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.sanitize(this.control.input.value)
      this.instance.setValue(value)
    })
  }
}

export default EditorNumberEnumSelect
