import { isArray, isBoolean, isInteger, isNull, isNumber, isObject, isSet, isString } from '../../helpers/utils'
import { getSchemaType } from '../../helpers/schema'

export function type (validator, value, schema, key, path) {
  const errors = []
  const schemaType = getSchemaType(schema)

  if (schemaType === 'any') {
    return errors
  }

  if (isSet(schemaType)) {
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

    if (isArray(schemaType)) {
      valid = schemaType.some((type) => {
        return types[type](value)
      })
    } else {
      valid = types[schemaType](value)
    }

    if (!valid) {
      errors.push({
        messages: ['Must be of type ' + schemaType],
        path: path
      })
    }
  }

  return errors
}
