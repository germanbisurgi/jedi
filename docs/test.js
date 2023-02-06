const Jedi = require('../dist/jedi')
const jedi = new Jedi({
  schema: {
    type: ['array', 'object', 'null']
  }
})

jedi.setValue('')
console.log(jedi.getValue())
console.log(jedi.validate())
