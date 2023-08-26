import { compileTemplate, isArray, isSet } from '../../helpers/utils'
import { getSchemaMinItems } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function minItems (validator, value, schema, key, path) {
  const errors = []
  const minItems = getSchemaMinItems(schema)

  if (isArray(value) && isSet(minItems)) {
    const invalid = (value.length < minItems)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMinItems, {
            minItems: minItems
          })
        ],
        path: path
      })
    }
  }

  return errors
}
