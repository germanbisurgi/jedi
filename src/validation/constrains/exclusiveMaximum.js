import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaExclusiveMaximum } from '../../helpers/schema.js'

export function exclusiveMaximum (context) {
  const errors = []
  const exclusiveMaximum = getSchemaExclusiveMaximum(context.schema)

  if (isNumber(context.value) && isSet(exclusiveMaximum)) {
    const invalid = (context.value >= exclusiveMaximum)

    if (invalid) {
      errors.push({
        path: context.path,
        constraint: 'exclusiveMaximum',
        messages: [
          compileTemplate(context.translator.translate('errorExclusiveMaximum'), {
            exclusiveMaximum: exclusiveMaximum
          })
        ]
      })
    }
  }

  return errors
}
