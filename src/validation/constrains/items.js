import { isArray, isSet } from '../../helpers/utils.js'
import { getSchemaItems, getSchemaPrefixItems } from '../../helpers/schema.js'

export function items (context) {
  const errors = []
  const items = getSchemaItems(context.schema)
  const prefixItems = getSchemaPrefixItems(context.schema)

  if (isArray(context.value) && isSet(items)) {
    const prefixItemsSchemasCount = isSet(prefixItems) ? prefixItems.length : 0

    if (items === false && context.value.length > 0 && context.value.length > prefixItemsSchemasCount) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'items',
        messages: [context.translator.translate('errorItems')]
      })
    }
  }

  return errors
}
