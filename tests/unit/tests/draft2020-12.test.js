/* global describe it expect */

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const Jedi = require('../../../dist/jedi')

const suites = [
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/additionalProperties.json'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/allOf'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/anchor'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/anyOf'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/boolean_schema'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/const'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/contains'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/content.json'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/default'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/defs'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/dependentRequired'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/dependentSchemas'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/dynamicRef'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/enum'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/exclusiveMaximum'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/exclusiveMinimum'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/format'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/id'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/if-then-else'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/infinite-loop-detection'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/items'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/maxContains'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/maximum'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/maxItems'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/maxLength'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/maxProperties'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/minContains'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/minimum'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/minItems'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/minLength'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/minProperties'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/multipleOf'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/not'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/oneOf'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/pattern'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/patternProperties'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/prefixItems'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/properties'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/propertyNames'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/ref'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/refRemote'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/required'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/type'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/unevaluatedItems'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/unevaluatedProperties'),
  require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/uniqueItems'),
  // require('../../../node_modules/json-schema-test-suite/tests/draft2020-12/vocabulary'),
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
