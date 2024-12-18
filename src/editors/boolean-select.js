import EditorBoolean from './boolean.js'
import { getSchemaDescription, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorBooleanSelect instance.
 * @extends EditorBooleanCheckbox
 */
class EditorBooleanSelect extends EditorBoolean {
  static resolves (schema) {
    return getSchemaType(schema) === 'boolean'
  }

  build () {
    this.control = this.theme.getSelectControl({
      values: ['false', 'true'],
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || ['false', 'true'],
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema),
      info: getSchemaXOption(this.instance.schema, 'info')
    })
  }

  adaptForTable () {
    this.theme.adaptForTableSelectControl(this.control)
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      const value = this.control.input.value === 'true'
      this.instance.setValue(value, true, 'editor')
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.control.input.value = this.instance.getValue() === true ? 'true' : 'false'
  }
}

export default EditorBooleanSelect
