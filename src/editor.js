class Editor {
  constructor (config) {
    this.theme = config.theme
    this.schema = config.schema
    this.html = null
    this.init()
  }

  init () {
    this.build()
  }

  build () {}

  addEventListeners () {

  }
}

export default Editor
