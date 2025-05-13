import Editor from './editor.js'
import {
  isSet
} from '../helpers/utils.js'
import {
  getSchemaDescription,
  getSchemaIf,
  getSchemaXOption
} from '../helpers/schema.js'

/**
 * Represents an EditorIfThenElse instance.
 * @extends Editor
 */
class EditorIfThenElse extends Editor {
  static resolves (schema) {
    const schemaIf = getSchemaIf(schema)
    return isSet(schemaIf)
  }

  build () {
    this.control = this.theme.getIfThenElseControl({
      title: 'Options',
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      id: this.getIdFromPath(this.instance.path),
      description: getSchemaDescription(this.instance.schema)
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.control.childrenSlot.innerHTML = ''
    this.control.childrenSlot.appendChild(this.instance.activeInstance.ui.control.container)

    if (this.disabled || this.instance.isReadOnly()) {
      this.instance.activeInstance.ui.disable()
    } else {
      this.instance.activeInstance.ui.enable()
    }
  }

  getErrorFeedback (config) {
    return this.theme.getAlert(config)
  }
}

export default EditorIfThenElse
