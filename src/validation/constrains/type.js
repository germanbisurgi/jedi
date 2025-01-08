import {
  compileTemplate, getType,
  isArray,
  isBoolean,
  isInteger,
  isNull,
  isNumber,
  isObject,
  isSet,
  isString
} from '../../helpers/utils.js'
import { getSchemaType } from '../../helpers/schema.js'

export function type (validator, value, schema, key, path) {
  const errors = []
  const type = getSchemaType(schema)

  if (type === 'any') {
    return errors
  }

  if (isSet(type)) {
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

    if (isArray(type)) {
      valid = type.some((type) => {
        return types[type](value)
      })
    } else {
      valid = types[type](value)
    }

    if (!valid) {
      errors.push({
        path: path,
        constrain: 'type',
        messages: [
          compileTemplate(validator.translator.translate('errorType'), {
            type: type,
            valueType: getType(value)
          })
        ]
      })
    }
  }

  return errors
}
