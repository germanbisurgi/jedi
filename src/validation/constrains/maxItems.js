import { isArray, isSet } from '../../utils'

export const _maxItems = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && isSet(schema.maxItems())) {
    const invalid = (value.length > schema.maxItems())

    if (invalid) {
      errors.push({
        message: 'Must have at most ' + schema.maxItems() + ' items',
        path: path
      })
    }
  }

  return errors
}
