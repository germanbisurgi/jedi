const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const SchemaTools = require('../dist/schema-tools')

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

const refParser = new SchemaTools.RefParser({
  XMLHttpRequest: XMLHttpRequest
})
const dereferencedSchema = refParser.dereference(schema)
console.log(JSON.stringify(dereferencedSchema, null, 2))

new SchemaTools.Jedi({
  schema: dereferencedSchema
})
