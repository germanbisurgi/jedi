import EditorBooleanEnumRadio from './editors/boolean-enum-radio.js'
import EditorBooleanEnumSelect from './editors/boolean-enum-select.js'
import EditorBooleanCheckbox from './editors/boolean-checkbox.js'
import EditorStringEnumRadio from './editors/string-enum-radio.js'
import EditorStringEnumSelect from './editors/string-enum-select.js'
import EditorStringTextarea from './editors/string-textarea.js'
import EditorStringAwesomplete from './editors/string-awesomplete.js'
import EditorStringInput from './editors/string-input.js'
import EditorNumberEnumRadio from './editors/number-enum-radio.js'
import EditorNumberEnumSelect from './editors/number-enum-select.js'
import EditorNumberInput from './editors/number-input.js'
import EditorObjectGrid from './editors/object-grid.js'
import EditorObjectNav from './editors/object-nav.js'
import EditorObject from './editors/object.js'
import EditorArrayNav from './editors/array-nav.js'
import EditorArray from './editors/array.js'
import EditorMultiple from './editors/multiple.js'
import EditorNull from './editors/null.js'

class UiResolver {
  constructor (options) {
    this.customEditors = options.customEditors ?? []

    this.editors = [
      EditorBooleanEnumRadio,
      EditorBooleanCheckbox,
      EditorBooleanEnumSelect,
      EditorStringEnumRadio,
      EditorStringEnumSelect,
      EditorStringTextarea,
      EditorStringAwesomplete,
      EditorStringInput,
      EditorNumberEnumRadio,
      EditorNumberEnumSelect,
      EditorNumberInput,
      EditorObjectGrid,
      EditorObjectNav,
      EditorObject,
      EditorArrayNav,
      EditorArray,
      EditorNull,
      EditorMultiple
    ]
  }

  getClass (schema) {
    for (const editor of this.customEditors) {
      if (editor.resolves(schema)) {
        return editor
      }
    }

    for (const editor of this.editors) {
      if (editor.resolves(schema)) {
        return editor
      }
    }

    return null
  }
}

export default UiResolver
