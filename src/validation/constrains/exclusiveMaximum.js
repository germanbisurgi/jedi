import { isNumber, isSet } from '../../utils'

export const _exclusiveMaximum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.exclusiveMaximum())) {
    const invalid = (value >= schema.exclusiveMaximum())

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must be less than ' + schema.exclusiveMaximum(),
        path: path
      })
    }
  }

  return errors
}
