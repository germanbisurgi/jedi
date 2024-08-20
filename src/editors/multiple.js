import Editor from './editor.js'
import { isArray, isSet, notSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaAnyOf, getSchemaDescription, getSchemaOneOf, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents an EditorMultiple instance.
 * @extends Editor
 */
class EditorMultiple extends Editor {
  static resolves (schema) {
    const schemaType = getSchemaType(schema)
    const schemaOneOf = getSchemaOneOf(schema)
    const schemaAnyOf = getSchemaAnyOf(schema)
    return isSet(schemaAnyOf) || isSet(schemaOneOf) || schemaType === 'any' || isArray(schemaType) || notSet(schemaType)
  }

  build () {
    this.control = this.theme.getMultipleControl({
      title: 'Options',
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      id: pathToAttribute(this.instance.path),
      description: getSchemaDescription(this.instance.schema),
      switcherOptionValues: this.instance.switcherOptionValues,
      switcherOptionsLabels: this.instance.switcherOptionsLabels
    })
  }

  addEventListeners () {
    this.control.switcher.input.addEventListener('change', () => {
      const index = Number(this.control.switcher.input.value)
      this.instance.switchInstance(index)
    })
  }

  refreshUI () {
    this.refreshInteractiveElements()
    this.control.childrenSlot.innerHTML = ''
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container)
    this.control.switcher.input.value = this.instance.index

    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable()
    } else {
      this.instance.activeInstance.ui.enable()
    }
  }

  getInvalidFeedback (config) {
    return this.theme.getAlert(config)
  }
}

export default EditorMultiple
