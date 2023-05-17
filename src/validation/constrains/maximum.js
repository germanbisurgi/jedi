import { isNumber, isSet } from '../../utils'

export const maximum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.maximum())) {
    const computedMaximum = schema.maximum()
    const invalid = (value > computedMaximum)

    if (invalid) {
      errors.push({
        message: 'Must be less than ' + computedMaximum,
        path: path
      })
    }
  }

  return errors
}
