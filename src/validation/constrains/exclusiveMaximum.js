import { isNumber, isSet } from '../../helpers/utils'
import { getSchemaExclusiveMaximum } from '../../helpers/schema'

export function exclusiveMaximum (validator, value, schema, key, path) {
  const errors = []
  const schemaExclusiveMaximum = getSchemaExclusiveMaximum(schema)

  if (isNumber(value) && isSet(schemaExclusiveMaximum)) {
    const invalid = (value >= schemaExclusiveMaximum)

    if (invalid) {
      errors.push({
        messages: [
          'Must be less than ' + schemaExclusiveMaximum
        ],
        path: path
      })
    }
  }

  return errors
}
