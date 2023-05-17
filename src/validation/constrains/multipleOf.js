import { isNumber, isSet } from '../../utils'

export const multipleOf = (validator, value, schema, key, path) => {
  const errors = []

  if (isNumber(value) && isSet(schema.multipleOf())) {
    const isMultipleOf = (value / schema.multipleOf() === Math.floor(value / schema.multipleOf()))
    const invalid = (!isMultipleOf || value.toString().includes('e'))

    if (invalid) {
      errors.push({
        message: 'Must be multiple of ' + schema.multipleOf(),
        path: path
      })
    }
  }

  return errors
}
