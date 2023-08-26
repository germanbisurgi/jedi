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
} from '../../helpers/utils'
import { getSchemaType } from '../../helpers/schema'
import { i18n } from '../../i18n'

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
        messages: [
          compileTemplate(i18n.errorType, {
            type: type,
            valueType: getType(value)
          })
        ],
        path: path
      })
    }
  }

  return errors
}
