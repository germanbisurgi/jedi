import { isString, isNumber, isInteger, isBoolean, isArray, isObject, isNull } from '../utils'

class Type {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.types()) {
      return errors
    }

    if (schema.typeIs('any')) {
      return errors
    }

    if (schema.type()) {
      const types = {
        string: value => isString(value),
        number: value => isNumber(value),
        integer: value => isInteger(value),
        boolean: value => isBoolean(value),
        array: value => isArray(value),
        object: value => isObject(value),
        null: value => isNull(value)
      }

      const valid = types[schema.type()](value)

      if (!valid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be of type ' + schema.type(),
          path: path
        })
      }
    }

    return errors
  }
}

export default Type
