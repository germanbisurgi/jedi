const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
const Jedi = require('../dist/jedi')

const schema = {
  "$ref": "https://json.schemastore.org/jsdoc-1.0.0.json"
}

const editor = new Jedi({ schema, XMLHttpRequest })

console.log('ready', JSON.stringify(editor.refParser, null, 2))
