import { isArray, isSet } from '../../helpers/utils'
import { getSchemaMinItems } from '../../helpers/schema'

export function minItems (validator, value, schema, key, path) {
  const errors = []
  const schemaMinItems = getSchemaMinItems(schema)

  if (isArray(value) && isSet(schemaMinItems)) {
    const invalid = (value.length < schemaMinItems)

    if (invalid) {
      errors.push({
        messages: ['Must have at least ' + schemaMinItems + ' items'],
        path: path
      })
    }
  }

  return errors
}
