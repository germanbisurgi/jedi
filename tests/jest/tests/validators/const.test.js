/* global describe it expect */

const Jedi = require('../../../../dist/jedi')
const schema = require('../../../../docs/json/validator/const.json')
const jedi = new Jedi({
  schema: schema
})

describe('const', function () {
  it('should display @const validation errors', function () {
    expect(jedi.validate()).toStrictEqual([
      { message: 'string must have value: "test"', path: 'root.string' },
      { message: 'number must have value: 2.5', path: 'root.number' },
      { message: 'integer must have value: 3', path: 'root.integer' },
      { message: 'boolean must have value: true', path: 'root.boolean' },
      { message: 'array must have value: ["test"]', path: 'root.array' },
      { message: 'object must have value: {"test":"test"}', path: 'root.object' }
    ])
  })
})
