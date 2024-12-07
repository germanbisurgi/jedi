import {
  isArray,
  isSet
} from '../helpers/utils.js'

import {
  getSchemaDescription,
  getSchemaEnum,
  getSchemaItems,
  getSchemaTitle,
  getSchemaType,
  getSchemaUniqueItems,
  getSchemaXOption
} from '../helpers/schema.js'

import Editor from './editor.js'

/**
 * Represents an EditorArrayEnumItems instance.
 * @extends Editor
 */
class EditorArrayEnumItems extends Editor {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const schemaItems = getSchemaItems(schema)
    const schemaItemsType = isSet(schemaItems) && getSchemaType(schemaItems)
    const isArrayType = isSet(schemaType) && schemaType === 'array'
    const isUniqueItems = getSchemaUniqueItems(schema) === true
    const hasEnum = isSet(schemaItems) && isSet(getSchemaEnum(schema.items))
    const hasTypes = isSet(schemaItems) && isSet(schemaItemsType)

    const validTypes = ['string', 'number', 'integer']

    const hasValidItemType = isSet(schemaItems) &&
      isSet(schemaItemsType) &&
      (validTypes.includes(schemaItemsType) ||
        (isArray(schemaItemsType) && schemaItemsType.some(type => validTypes.includes(type))))

    return isArrayType && isUniqueItems && hasEnum && hasTypes && hasValidItemType
  }

  build () {
    this.control = this.theme.getCheckboxesControl({
      values: getSchemaEnum(this.instance.schema.items),
      titles: getSchemaXOption(this.instance.schema.items, 'enumTitles') || getSchemaEnum(this.instance.schema.items),
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  adaptForTable (td) {
    this.theme.adaptForTableCheckboxesControl(this.control, td)
  }

  addEventListeners () {
    this.control.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        const value = this.instance.getValue()
        if (checkbox.checked) {
          value.push(checkbox.value)
        } else {
          const index = value.indexOf(checkbox.value)
          if (index > -1) {
            value.splice(index, 1)
          }
        }

        this.instance.setValue(value, true, 'editor')
      })
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()

    const value = this.instance.getValue()

    this.control.checkboxes.forEach((checkbox) => {
      checkbox.checked = value.includes(checkbox.value)
    })
  }
}

export default EditorArrayEnumItems
