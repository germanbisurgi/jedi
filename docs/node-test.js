const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const Jedi = require('../dist/jedi')

const schema = {
  'type': 'object',
  'properties': {
    'country': {
      'type': 'string',
      'default': 'America',
      'enum': [
        'America',
        'Canada'
      ]
    },
    'postal_code': {
      'type': 'string',
      'minLength': 2
    }
  },
  'if': {
    'properties': {
      'country': {
        'const': 'America'
      }
    }
  },
  'then': {
    'properties': {
      'postal_code': {
        'pattern': '[0-9]{5}(-[0-9]{4})?'
      }
    }
  },
  'else': {
    'properties': {
      'postal_code': {
        'pattern': '[A-Z][0-9][A-Z] [0-9][A-Z][0-9]'
      }
    }
  }
}

const jedi = new Jedi({
  schema: schema,
  XMLHttpRequest: XMLHttpRequest
})

console.log(JSON.stringify(jedi.schema, null, 2))
console.log('value:', jedi.getValue())
console.log('errors:', jedi.getErrors())
