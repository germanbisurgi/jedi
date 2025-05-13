import { compileTemplate, isSet } from '../../helpers/utils.js'
import { getSchemaNot } from '../../helpers/schema.js'

import Jedison from '../../jedison.js'

export function not (context) {
  const errors = []
  const not = getSchemaNot(context.schema)

  if (isSet(not)) {
    const notEditor = new Jedison({ refParser: context.validator.refParser, schema: not, data: context.value })
    const notErrors = notEditor.getErrors()
    notEditor.destroy()

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        path: context.path,
        constraint: 'not',
        messages: [
          compileTemplate(context.translator.translate('errorNot'))
        ]
      })
    }
  }

  return errors
}
