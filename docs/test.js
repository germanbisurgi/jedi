const Jedi = require('../dist/jedi')
const jedi = new Jedi({
  schema: {
    minItems: 1.0
  },
  startValue: []
})
console.log(jedi.getValue())
console.log(jedi.validate())
