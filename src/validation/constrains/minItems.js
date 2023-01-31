import { isArray } from '../../utils'

export const _minItems = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && schema.minItems()) {
    const invalid = (value.length < schema.minItems())

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must have at least ' + schema.minItems() + ' items',
        path: path
      })
    }
  }

  return errors
}
