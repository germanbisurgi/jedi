import Jedi from '../../jedi.js'
import { isSet } from '../../helpers/utils.js'
import { getSchemaAnyOf } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function anyOf (validator, value, schema, key, path) {
  const errors = []
  const anyOf = getSchemaAnyOf(schema)

  if (isSet(anyOf)) {
    let valid = false

    anyOf.forEach((schema) => {
      const anyOfEditor = new Jedi({ refParser: validator.refParser, schema: schema, data: value })
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
