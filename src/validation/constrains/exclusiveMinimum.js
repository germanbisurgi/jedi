import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaExclusiveMinimum } from '../../helpers/schema.js'

export function exclusiveMinimum (context) {
  const errors = []
  const exclusiveMinimum = getSchemaExclusiveMinimum(context.schema)

  if (isNumber(context.value) && isSet(exclusiveMinimum)) {
    const invalid = (context.value <= exclusiveMinimum)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'exclusiveMinimum',
        messages: [
          compileTemplate(context.translator.translate('errorExclusiveMinimum'), {
            exclusiveMinimum: exclusiveMinimum
          })
        ]
      })
    }
  }

  return errors
}
