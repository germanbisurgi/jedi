import { isArray, isSet } from '../../helpers/utils'
import { getSchemaMaxItems } from '../../helpers/schema'

export function maxItems (validator, value, schema, key, path) {
  const errors = []
  const schemaMaxItems = getSchemaMaxItems(schema)

  if (isArray(value) && isSet(schemaMaxItems)) {
    const invalid = (value.length > schemaMaxItems)

    if (invalid) {
      errors.push({
        messages: ['Must have at most ' + schemaMaxItems + ' items'],
        path: path
      })
    }
  }

  return errors
}
