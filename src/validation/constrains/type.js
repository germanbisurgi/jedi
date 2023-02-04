import { isArray, isBoolean, isInteger, isNull, isNumber, isObject, isString } from '../../utils'

export const _type = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(schema.type())) {
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
