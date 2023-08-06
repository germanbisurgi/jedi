import Jedi from '../../jedi'
import { isSet } from '../../utils'

export function anyOf (validator, value, schema, key, path) {
  const errors = []
  let extraMessages = []

  if (isSet(schema.anyOf())) {
    const anyOf = schema.anyOf()
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
