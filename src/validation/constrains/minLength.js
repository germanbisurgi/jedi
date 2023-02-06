import { isSet, isString } from '../../utils'

export const _minLength = (validator, value, schema, key, path) => {
  const errors = []

  if (isString(value) && isSet(schema.minLength())) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length < schema.minLength())

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + ' must be at least ' + schema.minLength() + ' characters long',
        path: path
      })
    }
  }

  return errors
}
