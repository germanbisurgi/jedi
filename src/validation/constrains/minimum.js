import { isNumber, isSet } from '../../helpers/utils'
import { getSchemaMinimum } from '../../helpers/schema'

export function minimum (validator, value, schema, key, path) {
  const errors = []
  const schemaMinimum = getSchemaMinimum(schema)

  if (isNumber(value) && isSet(schemaMinimum)) {
    const computedMinimum = schemaMinimum
    const invalid = (value < computedMinimum)

    if (invalid) {
      errors.push({
        messages: ['Must be at least ' + computedMinimum],
        path: path
      })
    }
  }

  return errors
}
