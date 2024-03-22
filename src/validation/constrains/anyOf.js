import Jedi from '../../jedi'
import { isSet } from '../../helpers/utils'
import { getSchemaAnyOf } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function anyOf (validator, value, schema, key, path) {
  const errors = []
  const anyOf = getSchemaAnyOf(schema)

  if (isSet(anyOf)) {
    let valid = false

    anyOf.forEach((schema) => {
      const anyOfEditor = new Jedi({ refParser: validator.refParser,  XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schema, data: value })
      const anyOfErrors = anyOfEditor.getErrors()
      anyOfEditor.destroy()

      if (anyOfErrors.length === 0) {
        valid = true
      }
    })

    if (!valid) {
      errors.push({
        messages: [
          i18n.errorAnyOf
        ],
        path: path,
        constrain: 'anyOf'
      })
    }
  }

  return errors
}
