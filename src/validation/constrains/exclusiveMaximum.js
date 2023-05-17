import { isNumber, isSet } from '../../utils'

export const exclusiveMaximum = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.exclusiveMaximum())) {
    const invalid = (value >= schema.exclusiveMaximum())

    if (invalid) {
      errors.push({
        message: 'Must be less than ' + schema.exclusiveMaximum(),
        path: path
      })
    }
  }

  return errors
}
