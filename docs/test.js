const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const Jedi = require('../dist/jedi')

const schema = {
  type: 'object',
  properties: {
    name: {
      $ref: '#/$defs/name'
    },
    age: {
      $ref: 'http://localhost:8282/ref.json'
    }
  },
  $defs: {
    name: {
      type: 'string'
    }
  }
}

const jedi = new Jedi({
  schema: schema,
  XMLHttpRequest: XMLHttpRequest
})

console.log(JSON.stringify(jedi.schema, null, 2))
