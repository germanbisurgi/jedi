import { isNumber, isSet } from '../../utils'

export const _multipleOf = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.multipleOf())) {
    const isMultipleOf = (value / schema.multipleOf() === Math.floor(value / schema.multipleOf()))
    const invalid = (!isMultipleOf || value.toString().includes('e'))

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + ' must be multiple of ' + schema.multipleOf(),
        path: path
      })
    }
  }

  return errors
}
