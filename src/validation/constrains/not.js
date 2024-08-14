import { compileTemplate, isSet } from '../../helpers/utils.js'
import { getSchemaNot } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'
import Validator from '../../validator.js'

export function not (validator, value, schema, key, path) {
  const errors = []
  const not = getSchemaNot(schema)

  if (isSet(not)) {
    const notEditor = new Validator({ refParser: validator.refParser, schema: not, data: value })
    const notErrors = notEditor.getErrors()
    notEditor.destroy()

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorNot)
        ],
        path: path,
        constrain: 'not'
      })
    }
  }

  return errors
}
