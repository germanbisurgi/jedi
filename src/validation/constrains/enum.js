import { isSet } from '../../utils'

export function _enum (validator, value, schema, key, path) {
  const errors = []
  if (isSet(schema.enum())) {
    const invalid = !schema.enum().some(e => JSON.stringify(value) === JSON.stringify(e))

    if (invalid) {
      errors.push({
        messages: [
          'Must be one of the enumerated values: ' + JSON.stringify(schema.enum())
        ],
        path: path
      })
    }
  }
  return errors
}
