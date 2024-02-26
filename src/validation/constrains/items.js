import { isArray, isSet } from '../../helpers/utils'
import { getSchemaItems, getSchemaPrefixItems } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function items (validator, value, schema, key, path) {
  const errors = []
  const items = getSchemaItems(schema)
  const prefixItems = getSchemaPrefixItems(schema)

  if (isArray(value) && isSet(items)) {
    const prefixItemsSchemasCount = isSet(prefixItems) ? prefixItems.length : 0

    if (items === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        messages: [i18n.errorItems],
        path: path,
        constrain: 'items'
      })
    }
  }

  return errors
}
