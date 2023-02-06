import { isArray, isSet } from '../../utils'

export const _minItems = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && isSet(schema.minItems())) {
    const invalid = (value.length < schema.minItems())

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + ' must have at least ' + schema.minItems() + ' items',
        path: path
      })
    }
  }

  return errors
}
