import { isNumber } from '../../utils'

export const _exclusiveMinimum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && schema.exclusiveMinimum()) {
    const computedMinimum = (schema.exclusiveMinimum() + 1)
    const invalid = (value < computedMinimum)

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must be at least ' + computedMinimum,
        path: path
      })
    }
  }

  return errors
}
