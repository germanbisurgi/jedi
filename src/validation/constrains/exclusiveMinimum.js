import { isNumber, isSet } from '../../helpers/utils'
import { getSchemaExclusiveMinimum } from '../../helpers/schema'

export function exclusiveMinimum (validator, value, schema, key, path) {
  const errors = []
  const schemaExclusiveMinimum = getSchemaExclusiveMinimum(schema)

  if (isNumber(value) && isSet(schemaExclusiveMinimum)) {
    const invalid = (value <= schemaExclusiveMinimum)

    if (invalid) {
      errors.push({
        messages: [
          'Must be greater than ' + schemaExclusiveMinimum
        ],
        path: path
      })
    }
  }

  return errors
}
