import Instance from './instance.js'
import EditorNull from '../editors/null.js'

/**
 * Represents a InstanceNull instance.
 * @extends Instance
 */
class InstanceNull extends Instance {
  setUI () {
    this.ui = new EditorNull(this)
  }
}

export default InstanceNull
