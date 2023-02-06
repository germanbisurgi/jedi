import { isSet } from '../../utils'

export const _enum = (validator, value, schema, key, path) => {
  const errors = []
  if (isSet(schema.enum())) {
    const invalid = !schema.enum().some(e => JSON.stringify(value) === JSON.stringify(e))
    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key
      errors.push({
        message: field + ' must be one of the enumerated values: ' + JSON.stringify(schema.enum()),
        path: path
      })
    }
  }
  return errors
}
