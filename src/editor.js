import Theme from './theme'

class Editor {
  constructor () {
    this.theme = new Theme()
    this.html = null
    this.init()
  }

  init () {
    this.preBuild()
    this.build()
    this.postBuild()
  }

  preBuild () {}
  build () {}
  postBuild () {}
}

export default Editor
