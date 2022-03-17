class Editor {
  constructor (config) {
    this.theme = config.theme
    this.schema = config.schema
    this.html = null
    this.init()
  }

  init () {
    console.log(this.schema)
    this.build()
  }

  build () {}

  addEventListeners () {

  }
}

export default Editor
