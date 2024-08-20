import Editor from './editor.js'

/**
 * Represents a EditorBoolean instance.
 * @extends Editor
 */
class EditorBoolean extends Editor {
  sanitize (value) {
    return Boolean(value)
  }
}

export default EditorBoolean
