import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaMaximum } from '../../helpers/schema.js'

export function maximum (context) {
  const errors = []
  const maximum = getSchemaMaximum(context.schema)

  if (isNumber(context.value) && isSet(maximum)) {
    const invalid = (context.value > maximum)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'maximum',
        messages: [
          compileTemplate(context.translator.translate('errorMaximum'), {
            maximum: maximum
          })
        ]
      })
    }
  }

  return errors
}
