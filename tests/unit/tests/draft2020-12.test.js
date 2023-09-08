/* global describe it expect */

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const Jedi = require('../../../dist/jedi')

const suites = [
  require('./draft2020-12/additionalProperties'),
  require('./draft2020-12/allOf'),
  // require('./draft2020-12/anchor'),
  require('./draft2020-12/anyOf'),
  require('./draft2020-12/boolean_schema'),
  require('./draft2020-12/const'),
  require('./draft2020-12/contains'),
  require('./draft2020-12/default'),
  // require('./draft2020-12/defs'),
  require('./draft2020-12/dependentRequired'),
  require('./draft2020-12/dependentSchemas'),
  // require('./draft2020-12/dynamicRef'),
  require('./draft2020-12/enum'),
  require('./draft2020-12/exclusiveMaximum'),
  require('./draft2020-12/exclusiveMinimum'),
  require('./draft2020-12/format'),
  // require('./draft2020-12/id'),
  require('./draft2020-12/if-then-else'),
  // require('./draft2020-12/infinite-loop-detection'),
  require('./draft2020-12/items'),
  require('./draft2020-12/maxContains'),
  require('./draft2020-12/maximum'),
  require('./draft2020-12/maxItems'),
  require('./draft2020-12/maxLength'),
  require('./draft2020-12/maxProperties'),
  require('./draft2020-12/minContains'),
  require('./draft2020-12/minimum'),
  require('./draft2020-12/minItems'),
  require('./draft2020-12/minLength'),
  require('./draft2020-12/minProperties'),
  require('./draft2020-12/multipleOf'),
  require('./draft2020-12/not'),
  require('./draft2020-12/oneOf'),
  require('./draft2020-12/pattern'),
  require('./draft2020-12/patternProperties'),
  require('./draft2020-12/prefixItems'),
  require('./draft2020-12/properties'),
  // require('./draft2020-12/propertyNames'),
  // require('./draft2020-12/ref'),
  // require('./draft2020-12/refRemote'),
  require('./draft2020-12/required'),
  require('./draft2020-12/type'),
  // require('./draft2020-12/unevaluatedItems'),
  // require('./draft2020-12/unevaluatedProperties'),
  require('./draft2020-12/uniqueItems'),
  // require('./draft2020-12/unknownKeyword'),
  // require('./draft2020-12/vocabulary'),
]

suites.forEach((suite) => {
  suite.forEach((scenario) => {
    describe(scenario.description, function () {
      scenario.tests.forEach((test) => {
        it(test.description, function () {
          const jedi = new Jedi({
            schema: scenario.schema,
            XMLHttpRequest: XMLHttpRequest
          })
          jedi.setValue(test.data)
          const errors = jedi.getErrors()
          const valid = (errors.length === 0)
          jedi.destroy()
          expect(valid).toStrictEqual(test.valid)
        })
      })
    })
  })
})
