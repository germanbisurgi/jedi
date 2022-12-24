import utils from '../utils'

class TypeValidator {
  validate (key, schema, value, path) {
    const errors = []

    if (!schema.type()) {
      return errors
    }

    if (schema.typeIs('any')) {
      return errors
    }

    // todo: should validate multiple types
    if (utils.isArray(schema.type())) {
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

    const valid = types[schema.type()](value)
    const field = schema.title() || key

    if (!valid) {
      errors.push({
        message: field + ' must be of type ' + schema.type(),
        path: path
      })
    }

    return errors
  }
}

export default TypeValidator
