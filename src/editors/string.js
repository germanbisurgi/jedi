import Editor from './editor.js'

/**
 * Represents a EditorString instance.
 * @extends Editor
 */
class EditorString extends Editor {
  sanitize (value) {
    return String(value)
  }
}

export default EditorString
