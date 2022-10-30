import Editor from '../editor'

class NullEditor extends Editor {
  sanitize (value) {
    return null
  }
}

export default NullEditor
