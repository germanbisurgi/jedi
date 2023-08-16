import Jedi from '../../jedi'
import { isSet } from '../../helpers/utils'
import { getSchemaAnyOf } from '../../helpers/schema'

export function anyOf (validator, value, schema, key, path) {
  const errors = []
  const schemaOneOf = getSchemaAnyOf(schema)

  let extraMessages = []

  if (isSet(schemaOneOf)) {
    const anyOf = schemaOneOf
    let valid = false

    anyOf.forEach((schema) => {
      const anyOfEditor = new Jedi({ schema: schema, startValue: value, refParser: false })
      const anyOfErrors = anyOfEditor.getErrors()
      anyOfEditor.destroy()

      if (anyOfErrors.length === 0) {
        valid = true
      }

      extraMessages = [...extraMessages, JSON.stringify(schema)]
    })

    if (!valid) {
      errors.push({
        messages: [
          'Must validate against at least one of the provided schemas',
          ...extraMessages
        ],
        path: path
      })
    }
  }

  return errors
}
