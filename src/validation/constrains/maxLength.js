import { isString } from '../../utils'

export const _maxLength = (validator, value, schema, key, path) => {
  const errors = []

  if (isString(value) && schema.maxLength()) {
    const invalid = (value.length > schema.maxLength())

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must be at most ' + schema.maxLength() + ' characters long',
        path: path
      })
    }
  }

  return errors
}
