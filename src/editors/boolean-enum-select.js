import EditorBoolean from './boolean.js'
import { pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaOption, getSchemaTitle } from '../helpers/schema.js'

/**
 * Represents an EditorBooleanEnumSelect instance.
 * @extends EditorBoolean
 */
class EditorBooleanEnumSelect extends EditorBoolean {
  build () {
    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: getSchemaOption(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.control.input.value === 'true'
      this.instance.setValue(value)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.input.value = this.instance.getValue() === true ? 'true' : 'false'
  }
}

export default EditorBooleanEnumSelect
