import Jedison from '../../jedison.js'
import { isSet } from '../../helpers/utils.js'
import { getSchemaAnyOf } from '../../helpers/schema.js'

export function anyOf (context) {
  const errors = []
  const anyOf = getSchemaAnyOf(context.schema)

  if (isSet(anyOf)) {
    let valid = false

    anyOf.forEach((schema) => {
      const anyOfEditor = new Jedison({ refParser: context.validator.refParser, schema: schema, data: context.value })
      const anyOfErrors = anyOfEditor.getErrors()
      anyOfEditor.destroy()

      if (anyOfErrors.length === 0) {
        valid = true
      }
    })

    if (!valid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'anyOf',
        messages: [
          context.translator.translate('errorAnyOf')
        ]
      })
    }
  }

  return errors
}
