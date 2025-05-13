import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import { getSchemaMinItems } from '../../helpers/schema.js'

export function minItems (context) {
  const errors = []
  const minItems = getSchemaMinItems(context.schema)

  if (isArray(context.value) && isSet(minItems)) {
    const invalid = (context.value.length < minItems)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'minItems',
        messages: [
          compileTemplate(context.translator.translate('errorMinItems'), {
            minItems: minItems
          })
        ]
      })
    }
  }

  return errors
}
