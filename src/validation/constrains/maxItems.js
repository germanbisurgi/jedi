import { isArray, isSet } from '../../utils'

export function maxItems (validator, value, schema, key, path) {
  const errors = []

  if (isArray(value) && isSet(schema.maxItems())) {
    const invalid = (value.length > schema.maxItems())

    if (invalid) {
      errors.push({
        messages: ['Must have at most ' + schema.maxItems() + ' items'],
        path: path
      })
    }
  }

  return errors
}
