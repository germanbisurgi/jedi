import Instance from './instance'
import EditorCircular from '../editors/circular'

/**
 * Represents a InstanceCircular instance.
 * @extends Instance
 */
class InstanceCircular extends Instance {
  setUI () {
    this.ui = new EditorCircular(this)
  }

  getValue() {
    return '[CIRCULAR]'
  }
}

export default InstanceCircular
