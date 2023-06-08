import { isArray, isSet } from '../../utils'

export const minItems = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && isSet(schema.minItems())) {
    const invalid = (value.length < schema.minItems())

    if (invalid) {
      errors.push({
        messages: ['Must have at least ' + schema.minItems() + ' items'],
        path: path
      })
    }
  }

  return errors
}
