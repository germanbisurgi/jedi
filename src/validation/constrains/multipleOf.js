import { isNumber, isSet } from '../../helpers/utils'
import { getSchemaMultipleOf } from '../../helpers/schema'

export function multipleOf (validator, value, schema, key, path) {
  const errors = []
  const schemaMultipleOf = getSchemaMultipleOf(schema)

  if (isNumber(value) && isSet(schemaMultipleOf)) {
    if (value === 0) {
      return errors
    }

    const isMultipleOf = (value / schemaMultipleOf === Math.floor(value / schemaMultipleOf))
    const invalid = (!isMultipleOf || value.toString().includes('e'))

    if (invalid) {
      errors.push({
        messages: ['Must be multiple of ' + schemaMultipleOf],
        path: path
      })
    }
  }

  return errors
}
