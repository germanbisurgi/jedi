import { compileTemplate, isSet } from '../../helpers/utils.js'
import { getSchemaNot } from '../../helpers/schema.js'

import Jedi from '../../jedi.js'

export function not (validator, value, schema, key, path) {
  const errors = []
  const not = getSchemaNot(schema)

  if (isSet(not)) {
    const notEditor = new Jedi({ refParser: validator.refParser, schema: not, data: value })
    const notErrors = notEditor.getErrors()
    notEditor.destroy()

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'not',
        messages: [
          compileTemplate(validator.translator.translate('errorNot'))
        ]
      })
    }
  }

  return errors
}
