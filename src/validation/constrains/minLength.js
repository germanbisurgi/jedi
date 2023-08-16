import { isSet, isString } from '../../helpers/utils'
import { getSchemaMinLength } from '../../helpers/schema'

export function minLength (validator, value, schema, key, path) {
  const errors = []
  const schemaMinLength = getSchemaMinLength(schema)

  if (isString(value) && isSet(schemaMinLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length < schemaMinLength)

    if (invalid) {
      errors.push({
        messages: ['Must be at least ' + schemaMinLength + ' characters long'],
        path: path
      })
    }
  }

  return errors
}
