import { compileTemplate, isSet, isString } from '../../helpers/utils.js'
import { getSchemaPattern } from '../../helpers/schema.js'

export function pattern (context) {
  const errors = []
  const pattern = getSchemaPattern(context.schema)

  if (isString(context.value) && isSet(pattern)) {
    const regexp = new RegExp(pattern)
    const invalid = !regexp.test(context.value)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'pattern',
        messages: [
          compileTemplate(context.translator.translate('errorPattern'), {
            pattern: pattern
          })
        ]
      })
    }
  }

  return errors
}
