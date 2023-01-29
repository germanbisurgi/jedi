const Jedi = require('./dist/jedi')
const schema = require('./docs/json/editors/all.json')
const jedi = new Jedi({
  schema: schema
})
console.log(jedi.validate())
