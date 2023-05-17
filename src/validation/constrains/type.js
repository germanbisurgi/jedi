import { isArray, isBoolean, isInteger, isNull, isNumber, isObject, isSet, isString } from '../../utils'

export const type = (validator, value, schema, key, path) => {
  const errors = []

  if (schema.typeIs('any')) {
    return errors
  }

  if (isSet(schema.type())) {
    const types = {
      string: value => isString(value),
      number: value => isNumber(value),
      integer: value => isInteger(value),
      boolean: value => isBoolean(value),
      array: value => isArray(value),
      object: value => isObject(value),
      null: value => isNull(value)
    }

    let valid = true

    if (isArray(schema.type())) {
      valid = schema.type().some((type) => {
        return types[type](value)
      })
    } else {
      valid = types[schema.type()](value)
    }

    if (!valid) {
      errors.push({
        message: 'Must be of type ' + schema.type(),
        path: path
      })
    }
  }

  return errors
}
