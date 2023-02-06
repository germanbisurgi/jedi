import { isNumber, isSet } from '../../utils'

export const _maximum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.maximum())) {
    const computedMaximum = schema.maximum()
    const invalid = (value > computedMaximum)

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + ' must be less than ' + computedMaximum,
        path: path
      })
    }
  }

  return errors
}
