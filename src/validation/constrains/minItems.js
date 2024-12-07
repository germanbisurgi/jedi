import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import { getSchemaMinItems } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function minItems (validator, value, schema, key, path) {
  const errors = []
  const minItems = getSchemaMinItems(schema)

  if (isArray(value) && isSet(minItems)) {
    const invalid = (value.length < minItems)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'minItems',
        messages: [
          compileTemplate(i18n.errorMinItems, {
            minItems: minItems
          })
        ]
      })
    }
  }

  return errors
}
