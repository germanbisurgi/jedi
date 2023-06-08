import Jedi from '../../jedi'
import { isSet } from '../../utils'

export const anyOf = (validator, value, schema, key, path) => {
  const errors = []

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
    })

    if (!valid) {
      errors.push({
        message: 'Must validate against at least one of the provided schemas',
        path: path
      })
    }
  }

  return errors
}
