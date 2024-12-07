import EditorString from './string.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaDescription, getSchemaTitle, getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringQuill instance.
 * @extends EditorString
 */
class EditorStringJodit extends EditorString {
  static resolves (schema) {
    return window.Jodit && getSchemaType(schema) === 'string' && isSet(getSchemaXOption(schema, 'jodit'))
  }

  build () {
    this.control = this.theme.getTextareaControl({
      id: this.getIdFromPath(this.instance.path),
      label: getSchemaTitle(this.instance.schema) || this.instance.getKey(),
      labelIconClass: getSchemaXOption(this.instance.schema, 'labelIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      description: getSchemaDescription(this.instance.schema)
    })

    try {
      this.jodit = window.Jodit.make(this.control.input, getSchemaXOption(this.instance.schema, 'jodit'))
    } catch (e) {
      console.error('Jodit is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.jodit.events.on('change', () => {
      const joditValue = this.jodit.value

      if (joditValue !== this.instance.getValue()) {
        this.instance.setValue(joditValue, true, 'editor')
      }
    })
  }

  refreshInteractiveElements () {
    if (this.disabled || this.readOnly) {
      this.jodit.setReadOnly(true)
    } else {
      this.jodit.setReadOnly(false)
    }
  }

  refreshUI () {
    super.refreshUI()
    this.jodit.value = this.instance.getValue()
  }

  destroy () {
    this.jodit.destruct()
    super.destroy()
  }
}

export default EditorStringJodit
