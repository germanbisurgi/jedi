import utils from '../utils'

class TypeValidator {
  validate (schema, value, path) {
    const errors = []
    if (typeof schema.type === 'undefined') {
      return errors
    }

    if (schema.type === 'any') {
      return errors
    }

    if (utils.isArray(schema.type)) {
      return errors
    }

    const types = {
      string: value => utils.isString(value),
      number: value => utils.isNumber(value),
      integer: value => utils.isInteger(value),
      boolean: value => utils.isBoolean(value),
      array: value => utils.isArray(value),
      object: value => utils.isObject(value),
      null: value => utils.isNull(value)
    }

    const valid = types[schema.type](value)

    if (!valid) {
      errors.push({
        message: 'Must be of type ' + schema.type,
        path: path
      })
    }

    return errors
  }
}

export default TypeValidator
