import { isString } from '../../utils'

export const _minLength = (validator, value, schema, key, path) => {
  const errors = []

  if (isString(value) && schema.minLength()) {
    const invalid = (value.length < schema.minLength())

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must be at least ' + schema.minLength() + ' characters long',
        path: path
      })
    }
  }

  return errors
}
