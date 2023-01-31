const Jedi = require('../dist/jedi')
const schema = require('./json/editors/all')
const jedi = new Jedi({
  schema: schema
})
console.log(jedi.validate())
