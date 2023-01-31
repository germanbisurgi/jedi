import { isNumber } from '../../utils'

export const _exclusiveMaximum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && schema.exclusiveMaximum()) {
    const computedMaximum = (schema.exclusiveMaximum() - 1)
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