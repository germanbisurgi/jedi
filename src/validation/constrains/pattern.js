import { isSet, isString } from '../../utils'

export const _pattern = (validator, value, schema, key, path) => {
  const errors = []

  if (isString(value) && isSet(schema.pattern())) {
    const regexp = new RegExp(schema.pattern())
    const invalid = !regexp.test(value)

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + ' must be the pattern: ' + schema.pattern(),
        path: path
      })
    }
  }

  return errors
}
