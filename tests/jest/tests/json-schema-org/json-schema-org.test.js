/* global describe it expect */

const SchemaTools = require('../../../../dist/schema-tools')

const suites = [
  require('./test-suite/additionalProperties'), // 11
  require('./test-suite/allOf'),
  require('./test-suite/anyOf'),
  require('./test-suite/boolean_schema'),
  require('./test-suite/const'),
  // require('./test-suite/contains'),
  require('./test-suite/default'),
  // require('./test-suite/dependentRequired'),
  // require('./test-suite/dependentSchemas'),
  require('./test-suite/enum'),
  require('./test-suite/exclusiveMaximum'),
  require('./test-suite/exclusiveMinimum'),
  require('./test-suite/format'),
  require('./test-suite/if-then-else'),
  // require('./test-suite/items'), // 7
  // require('./test-suite/maxContains'),
  require('./test-suite/maximum'),
  require('./test-suite/maxItems'),
  require('./test-suite/maxLength'),
  require('./test-suite/maxProperties'),
  // require('./test-suite/minContains'),
  require('./test-suite/minimum'),
  require('./test-suite/minItems'),
  require('./test-suite/minLength'),
  require('./test-suite/minProperties'),
  require('./test-suite/multipleOf'),
  // require('./test-suite/not'), // 2
  require('./test-suite/oneOf'),
  require('./test-suite/pattern'),
  require('./test-suite/patternProperties'),
  // require('./test-suite/prefixItems'),
  require('./test-suite/properties'), // 1
  require('./test-suite/required'),
  require('./test-suite/type'),
  // require('./test-suite/uniqueItems'), // 15
]

suites.forEach((suite) => {
  suite.forEach((scenario) => {
    describe(scenario.description, function () {
      scenario.tests.forEach((test) => {
        it(test.description, function () {
          const jedi = new SchemaTools.Jedi({
            schema: scenario.schema
          })
          jedi.setValue(test.data)
          const errors = jedi.validate()
          const valid = (errors.length === 0)
          jedi.destroy()
          expect(valid).toStrictEqual(test.valid)
        })
      })
    })
  })
})
