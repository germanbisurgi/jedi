import { isNumber, isSet } from '../../utils'

export const _exclusiveMinimum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.exclusiveMinimum())) {
    const invalid = (value <= schema.exclusiveMinimum())

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + ' must be greater than ' + schema.exclusiveMinimum(),
        path: path
      })
    }
  }

  return errors
}
