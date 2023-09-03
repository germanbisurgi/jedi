import Jedi from '../../jedi'
import { isSet } from '../../helpers/utils'
import { getSchemaAnyOf } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function anyOf (validator, value, schema, key, path) {
  let errors = []
  const anyOf = getSchemaAnyOf(schema)

  if (isSet(anyOf)) {
    let valid = false
    let anyOfErrorsMessages = []

    anyOf.forEach((schema) => {
      const anyOfEditor = new Jedi({ schema: schema, startValue: value, refParser: false })
      const anyOfErrors = anyOfEditor.getErrors()
      anyOfErrorsMessages = [...anyOfErrorsMessages, ...anyOfErrors]
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
        path: path
      })

      errors = [...errors, ...anyOfErrorsMessages]
    }
  }

  return errors
}
