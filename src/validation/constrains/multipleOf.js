import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaMultipleOf } from '../../helpers/schema.js'

export function multipleOf (context) {
  const errors = []
  const multipleOf = getSchemaMultipleOf(context.schema)

  if (isNumber(context.value) && isSet(multipleOf)) {
    if (context.value === 0) {
      return errors
    }

    const isMultipleOf = (context.value / multipleOf === Math.floor(context.value / multipleOf))
    const invalid = (!isMultipleOf || context.value.toString().includes('e'))

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'multipleOf',
        messages: [
          compileTemplate(context.translator.translate('errorMultipleOf'), {
            multipleOf: multipleOf
          })
        ]
      })
    }
  }

  return errors
}
