/* global Raty */

import EditorNumber from './number.js'
import { isSet } from '../helpers/utils.js'
import { getSchemaType, getSchemaXOption } from '../helpers/schema.js'

/**
 * Represents a EditorNumberRaty instance.
 * @extends EditorString
 */
class EditorNumberRaty extends EditorNumber {
  static resolves (schema) {
    return typeof Raty !== 'undefined' && getSchemaType(schema) === 'number' && isSet(getSchemaXOption(schema, 'raty'))
  }

  build () {
    this.control = this.theme.getPlaceholderControl({
      title: this.getTitle(),
      description: this.getDescription(),
      id: this.getIdFromPath(this.instance.path),
      titleIconClass: getSchemaXOption(this.instance.schema, 'titleIconClass'),
      titleHidden: getSchemaXOption(this.instance.schema, 'titleHidden'),
      info: this.getInfo()
    })

    try {
      this.raty = new Raty(this.control.placeholder, Object.assign({}, getSchemaXOption(this.instance.schema, 'raty'), {
        click: (score) => {
          this.instance.setValue(score, true, 'user')
        }
      }))
      this.raty.init()
    } catch (e) {
      console.error('Raty is not available or not loaded correctly.', e)
    }
  }

  refreshDisabledState () {
    if (this.disabled || this.readOnly) {
      this.raty.readOnly(true)
    } else {
      this.raty.readOnly(false)
    }
  }

  refreshUI () {
    super.refreshUI()
    this.raty.score(this.instance.getValue())
  }
}

export default EditorNumberRaty
