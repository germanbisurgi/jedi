import { isSet, isString } from '../../helpers/utils'
import { getSchemaMaxLength } from '../../helpers/schema'

export function maxLength (validator, value, schema, key, path) {
  const errors = []
  const schemaMaxLength = getSchemaMaxLength(schema)

  if (isString(value) && isSet(schemaMaxLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length > schemaMaxLength)

    if (invalid) {
      errors.push({
        messages: ['Must be at most ' + schemaMaxLength + ' characters long'],
        path: path
      })
    }
  }

  return errors
}
