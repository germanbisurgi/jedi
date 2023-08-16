import { isObject, isSet } from '../../helpers/utils'
import { getSchemaMinProperties } from '../../helpers/schema'

export function minProperties (validator, value, schema, key, path) {
  const errors = []
  const schemaMinProperties = getSchemaMinProperties(schema)

  if (isObject(value) && isSet(schemaMinProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount < schemaMinProperties)

    if (invalid) {
      errors.push({
        messages: ['Must have at least ' + schemaMinProperties + ' properties'],
        path: path
      })
    }
  }

  return errors
}
