import { compileTemplate, isSet } from '../../helpers/utils'
import { getSchemaNot } from '../../helpers/schema'
import { i18n } from '../../i18n'
import Jedi from '../../jedi'

export function not (validator, value, schema, key, path) {
  const errors = []
  const not = getSchemaNot(schema)

  if (isSet(not)) {
    const notEditor = new Jedi({ refParser: validator.refParser,  XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: not, data: value })
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
