import EditorString from './string.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorStringFlatpickr instance.
 * @extends EditorString
 */
class EditorStringFlatpickr extends EditorString {
  static resolves (schema) {
    return window.flatpickr && getSchemaType(schema) === 'string' && isSet(getSchemaXOption(schema, 'flatpickr'))
  }

  build () {
    this.control = this.theme.getInputControl({
      title: this.getTitle(),
      description: this.getDescription(),
      type: 'text',
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, 'titleIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      info: getSchemaXOption(this.instance.schema, 'info')
    })

    try {
      this.flatpickr = window.flatpickr(this.control.input, getSchemaXOption(this.instance.schema, 'flatpickr'))
    } catch (e) {
      console.error('Flatpickr is not available or not loaded correctly.', e)
    }
  }

  addEventListeners () {
    this.control.input.addEventListener('change', () => {
      this.instance.setValue(this.control.input.value, true, 'editor')
    })
  }

  refreshUI () {
    this.refreshDisabledState()
    this.flatpickr.setDate(this.instance.getValue())
  }

  destroy () {
    this.flatpickr.destroy()
    super.destroy()
  }
}

export default EditorStringFlatpickr
