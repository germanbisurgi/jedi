import Instance from './instance'
import NullEditor from '../editors/null'

class NullInstance extends Instance {
  setUI () {
    this.ui = new NullEditor(this)
  }
}

export default NullInstance
