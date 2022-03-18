import Editor from '../editor'

class BooleanEditor extends Editor {
  sanitize (value) {
    return Boolean(value)
  }
}

export default BooleanEditor
