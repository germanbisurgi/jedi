import { isNumber } from '../../utils'

export const _maximum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && schema.maximum()) {
    const computedMaximum = schema.maximum()
    const invalid = (value > computedMaximum)

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must be less than ' + computedMaximum,
        path: path
      })
    }
  }

  return errors
}
