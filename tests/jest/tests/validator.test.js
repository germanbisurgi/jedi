/* global describe it expect */

const Jedi = require('../../../dist/jedi')
const schema = require('../../../docs/json/editors/all.json')
const jedi = new Jedi({
  schema: schema
})

describe('Validator', function () {
  it('should return error messages', function () {
    expect(jedi.validate()).toStrictEqual([
      {
        message: 'String enum select must be one of the enumerated values: ["albert","betti","carl"]',
        path: 'root.strings.string-enum-select'
      },
      {
        message: 'String enum radio must be one of the enumerated values: ["albert","betti","carl"]',
        path: 'root.strings.string-enum-radio'
      },
      {
        message: 'Number enum select must be one of the enumerated values: [1.5,2.5,3.5]',
        path: 'root.numbers.number-enum-select'
      },
      {
        message: 'Number enum radio must be one of the enumerated values: [1.5,2.5,3.5]',
        path: 'root.numbers.number-enum-radio'
      },
      {
        message: 'Integer enum select must be one of the enumerated values: [1,2,3]',
        path: 'root.integers.integer-enum-select'
      },
      {
        message: 'Integer enum radio must be one of the enumerated values: [1,2,3]',
        path: 'root.integers.integer-enum-radio'
      }
    ])
  })
})
