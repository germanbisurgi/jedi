import EditorString from './string.js'
import { isSet, pathToAttribute } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringQuill instance.
 * @extends EditorString
 */
class EditorStringQuill extends EditorString {
  static resolves (schema) {
    return window.Quill && getSchemaType(schema) === 'string' && isSet(getSchemaXOption(schema, 'quill'))
  }

  build () {
    this.control = this.theme.getPlaceholderControl({
      id: pathToAttribute(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })

    try {
      this.quill = new window.Quill(this.control.placeholder, getSchemaXOption(this.instance.schema, 'quill'))
    } catch (e) {
      console.error('Quill is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.quill.root.addEventListener('blur', () => {
      const quillText = this.quill.getText()

      if (quillText !== this.instance.getValue()) {
        this.instance.setValue(quillText, true, 'editor')
      }
    })
  }

  refreshInteractiveElements () {
    if (this.disabled || this.readOnly) {
      this.quill.disable()
    } else {
      this.quill.enable()
    }
  }

  refreshUI () {
    super.refreshUI()
    this.quill.setText(this.instance.getValue())
  }
}

export default EditorStringQuill
