import { isSet, isString } from '../../utils'

export function pattern (validator, value, schema, key, path) {
  const errors = []

  if (isString(value) && isSet(schema.pattern())) {
    const regexp = new RegExp(schema.pattern())
    const invalid = !regexp.test(value)

    if (invalid) {
      errors.push({
        messages: ['Must be the pattern: ' + schema.pattern()],
        path: path
      })
    }
  }

  return errors
}
