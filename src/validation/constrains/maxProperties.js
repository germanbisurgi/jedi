import { isObject, isSet } from '../../helpers/utils'
import { getSchemaMaxProperties } from '../../helpers/schema'

export function maxProperties (validator, value, schema, key, path) {
  const errors = []
  const schemaMaxProperties = getSchemaMaxProperties(schema)

  if (isObject(value) && isSet(schemaMaxProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount > schemaMaxProperties)

    if (invalid) {
      errors.push({
        messages: ['Must have at most ' + schemaMaxProperties + ' properties'],
        path: path
      })
    }
  }

  return errors
}
