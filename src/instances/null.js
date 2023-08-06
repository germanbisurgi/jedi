import Instance from './instance'
import EditorNull from '../editors/null'

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
