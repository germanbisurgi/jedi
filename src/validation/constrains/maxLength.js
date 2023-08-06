import { isSet, isString } from '../../utils'

export function maxLength (validator, value, schema, key, path) {
  const errors = []

  if (isString(value) && isSet(schema.maxLength())) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length > schema.maxLength())

    if (invalid) {
      errors.push({
        messages: ['Must be at most ' + schema.maxLength() + ' characters long'],
        path: path
      })
    }
  }

  return errors
}
