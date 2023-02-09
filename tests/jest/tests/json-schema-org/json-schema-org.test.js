/* global describe it expect */

const Jedi = require('../../../../dist/jedi')

const suites = [
  // require('./test-suite/additionalProperties'), // 12
  require('./test-suite/allOf'),
  require('./test-suite/anyOf'),
  require('./test-suite/boolean_schema'),
  require('./test-suite/const'),
  require('./test-suite/default'),
  require('./test-suite/enum'),
  require('./test-suite/exclusiveMaximum'),
  require('./test-suite/exclusiveMinimum'),
  require('./test-suite/format'),
  require('./test-suite/if-then-else'),
  // require('./test-suite/items'), // 7
  require('./test-suite/maximum'),
  require('./test-suite/maxItems'),
  require('./test-suite/maxLength'),
  require('./test-suite/maxProperties'),
  require('./test-suite/minimum'),
  require('./test-suite/minItems'),
  require('./test-suite/minLength'),
  require('./test-suite/minProperties'),
  require('./test-suite/multipleOf'),
  // require('./test-suite/not'), // 2
  require('./test-suite/oneOf'),
  require('./test-suite/pattern'),
  require('./test-suite/patternProperties'),
  // require('./test-suite/properties'), // 8
  require('./test-suite/required'),
  require('./test-suite/type'),
  // require('./test-suite/uniqueItems'), // 15
]

suites.forEach((suite) => {
  suite.forEach((scenario) => {
    describe(scenario.description, function () {
      scenario.tests.forEach((test) => {
        it(test.description, function () {
          const jedi = new Jedi({
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
