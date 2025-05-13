import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaMinimum } from '../../helpers/schema.js'

export function minimum (context) {
  const errors = []
  const minimum = getSchemaMinimum(context.schema)

  if (isNumber(context.value) && isSet(minimum)) {
    const invalid = (context.value < minimum)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'minimum',
        messages: [
          compileTemplate(context.translator.translate('errorMinimum'), {
            minimum: minimum
          })
        ]
      })
    }
  }

  return errors
}
