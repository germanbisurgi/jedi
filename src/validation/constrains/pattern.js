import { isSet, isString } from '../../utils'

export const pattern = (validator, value, schema, key, path) => {
  const errors = []

  if (isString(value) && isSet(schema.pattern())) {
    const regexp = new RegExp(schema.pattern())
    const invalid = !regexp.test(value)

    if (invalid) {
      errors.push({
        message: 'Must be the pattern: ' + schema.pattern(),
        path: path
      })
    }
  }

  return errors
}
