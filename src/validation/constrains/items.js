import { isArray, isSet } from '../../helpers/utils.js'
import { getSchemaItems, getSchemaPrefixItems } from '../../helpers/schema.js'

export function items (validator, value, schema, key, path) {
  const errors = []
  const items = getSchemaItems(schema)
  const prefixItems = getSchemaPrefixItems(schema)

  if (isArray(value) && isSet(items)) {
    const prefixItemsSchemasCount = isSet(prefixItems) ? prefixItems.length : 0

    if (items === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        path: path,
        constraint: 'items',
        messages: [validator.translator.translate('errorItems')]
      })
    }
  }

  return errors
}
