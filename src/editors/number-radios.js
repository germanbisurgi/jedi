import EditorNumber from './number.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaEnum, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorNumberRadios instance.
 * @extends EditorNumber
 */
class EditorNumberRadios extends EditorNumber {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const schemaEnum = getSchemaEnum(schema)
    const optionFormat = getSchemaXOption(schema, 'format')
    const typeIsNumeric = schemaType === 'number' || schemaType === 'integer'
    return typeIsNumeric && isSet(schemaEnum) && optionFormat === 'radios'
  }

  build () {
    this.control = this.theme.getRadiosControl({
      values: getSchemaEnum(this.instance.schema),
      titles: getSchemaXOption(this.instance.schema, 'enumTitles') || getSchemaEnum(this.instance.schema),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema),
      inline: getSchemaXOption(this.instance.schema, 'radiosInline') || this.instance.jedi.options.radiosInline,
      info: getSchemaXOption(this.instance.schema, 'info')
    })
  }

  adaptForTable () {
    this.theme.adaptForTableRadiosControl(this.control)
  }

  addEventListeners () {
    this.control.radios.forEach((radio) => {
      radio.addEventListener('change', () => {
        const value = this.sanitize(radio.value)
        this.instance.setValue(value, true, 'editor')
      })
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.control.radios.forEach((radio) => {
      radio.checked = (Number(radio.value) === Number(this.instance.getValue()))
    })
  }
}

export default EditorNumberRadios
