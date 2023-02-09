import { isNumber, isSet } from '../../utils'

export const _minimum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.minimum())) {
    const computedMinimum = schema.minimum()
    const invalid = (value < computedMinimum)

    if (invalid) {
      errors.push({
        message: 'Must be at least ' + computedMinimum,
        path: path
      })
    }
  }

  return errors
}
