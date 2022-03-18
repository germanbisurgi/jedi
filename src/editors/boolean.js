import Editor from '../editor'

class BooleanEditor extends Editor {
  sanitize (value) {
    return !!value
  }
}

export default BooleanEditor
