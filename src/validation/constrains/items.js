import { isArray, isSet } from '../../helpers/utils'
import { getSchemaItems, getSchemaPrefixItems } from '../../helpers/schema'

export function items (validator, value, schema, key, path) {
  const errors = []
  const schemaItems = getSchemaItems(schema)
  const schemaPrefixItems = getSchemaPrefixItems(schema)

  if (isArray(value) && isSet(schemaItems)) {
    const prefixItemsSchemasCount = isSet(schemaPrefixItems) ? schemaPrefixItems.length : 0

    if (schemaItems === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        messages: ['Schema always fails validation.'],
        path: path
      })
    }
  }

  return errors
}
