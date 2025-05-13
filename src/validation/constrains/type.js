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

export function type (context) {
  const errors = []
  const type = getSchemaType(context.schema)

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
        return types[type](context.value)
      })
    } else {
      valid = types[type](context.value)
    }

    if (!valid) {
      errors.push({
        path: context.path,
        constraint: 'type',
        messages: [
          compileTemplate(context.translator.translate('errorType'), {
            type: type,
            valueType: getType(context.value)
          })
        ]
      })
    }
  }

  return errors
}
