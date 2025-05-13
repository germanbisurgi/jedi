import { compileTemplate, isArray, isSet } from '../../helpers/utils.js'
import { getSchemaMaxItems } from '../../helpers/schema.js'

export function maxItems (context) {
  const errors = []
  const maxItems = getSchemaMaxItems(context.schema)

  if (isArray(context.value) && isSet(maxItems)) {
    const invalid = (context.value.length > maxItems)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'maxItems',
        messages: [
          compileTemplate(context.translator.translate('errorMaxItems'), {
            maxItems: maxItems
          })
        ]
      })
    }
  }

  return errors
}
