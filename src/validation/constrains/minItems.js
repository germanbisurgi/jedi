import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import { getSchemaMinItems } from '../../helpers/schema.js'

export function minItems (validator, value, schema, key, path) {
  const errors = []
  const minItems = getSchemaMinItems(schema)

  if (isArray(value) && isSet(minItems)) {
    const invalid = (value.length < minItems)

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'minItems',
        messages: [
          compileTemplate(validator.translator.translate('errorMinItems'), {
            minItems: minItems
          })
        ]
      })
    }
  }

  return errors
}
