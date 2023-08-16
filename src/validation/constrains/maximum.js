import { isNumber, isSet } from '../../helpers/utils'
import { getSchemaMaximum } from '../../helpers/schema'

export function maximum (validator, value, schema, key, path) {
  const errors = []
  const schemaMaximum = getSchemaMaximum(schema)

  if (isNumber(value) && isSet(schemaMaximum)) {
    const computedMaximum = schemaMaximum
    const invalid = (value > computedMaximum)

    if (invalid) {
      errors.push({
        messages: ['Must be less than ' + computedMaximum],
        path: path
      })
    }
  }

  return errors
}
