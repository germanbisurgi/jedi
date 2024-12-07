import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import { getSchemaMaxItems } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function maxItems (validator, value, schema, key, path) {
  const errors = []
  const maxItems = getSchemaMaxItems(schema)

  if (isArray(value) && isSet(maxItems)) {
    const invalid = (value.length > maxItems)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'maxItems',
        messages: [
          compileTemplate(i18n.errorMaxItems, {
            maxItems: maxItems
          })
        ]
      })
    }
  }

  return errors
}
