import Instance from './instance'
import NullEditor from '../editors/null'

/**
 * Represents a NullInstance instance.
 * @extends Instance
 */
class NullInstance extends Instance {
  setUI () {
    this.ui = new NullEditor(this)
  }
}

export default NullInstance
