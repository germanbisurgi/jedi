import { compileTemplate, isArray, isSet } from '../../helpers/utils'
import { getSchemaMaxItems } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function maxItems (validator, value, schema, key, path) {
  const errors = []
  const maxItems = getSchemaMaxItems(schema)

  if (isArray(value) && isSet(maxItems)) {
    const invalid = (value.length > maxItems)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMaxItems, {
            maxItems: maxItems
          })
        ],
        path: path
      })
    }
  }

  return errors
}
