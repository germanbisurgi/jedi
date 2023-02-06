import { isSet, isString } from '../../utils'

export const _maxLength = (validator, value, schema, key, path) => {
  const errors = []

  if (isString(value) && isSet(schema.maxLength())) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length > schema.maxLength())

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + ' must be at most ' + schema.maxLength() + ' characters long',
        path: path
      })
    }
  }

  return errors
}
