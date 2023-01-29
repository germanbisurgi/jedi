/* global describe it expect */

const Jedi = require('../../../../dist/jedi')
const schema = require('../../../../docs/json/validator/allOf.json')
const jedi = new Jedi({
  schema: schema
})

describe('allOf', function () {
  it('should display @allOf validation errors', function () {
    expect(jedi.validate()).toStrictEqual([
      { message: 'string must have value: "test"', path: 'root.string' },
      { message: 'string must be at least 1 characters long', path: 'root.string' }
    ])
  })
})
