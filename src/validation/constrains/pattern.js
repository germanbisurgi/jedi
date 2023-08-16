import { isSet, isString } from '../../helpers/utils'
import { getSchemaPattern } from '../../helpers/schema'

export function pattern (validator, value, schema, key, path) {
  const errors = []
  const schemaPattern = getSchemaPattern(schema)

  if (isString(value) && isSet(schemaPattern)) {
    const regexp = new RegExp(schemaPattern)
    const invalid = !regexp.test(value)

    if (invalid) {
      errors.push({
        messages: ['Must be the pattern: ' + schemaPattern],
        path: path
      })
    }
  }

  return errors
}
