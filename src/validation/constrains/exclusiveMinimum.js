import { isNumber, isSet } from '../../utils'

export function exclusiveMinimum (validator, value, schema, key, path) {
  const errors = []

  if (isNumber(value) && isSet(schema.exclusiveMinimum())) {
    const invalid = (value <= schema.exclusiveMinimum())

    if (invalid) {
      errors.push({
        messages: [
          'Must be greater than ' + schema.exclusiveMinimum()
        ],
        path: path
      })
    }
  }

  return errors
}
