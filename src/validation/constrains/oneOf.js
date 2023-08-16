import { isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaOneOf } from '../../helpers/schema'

export function oneOf (validator, value, schema, key, path) {
  const errors = []
  const schemaOneOf = getSchemaOneOf(schema)
  let extraMessages = []

  if (isSet(schemaOneOf)) {
    let counter = 0

    schemaOneOf.forEach((schema) => {
      const oneOfEditor = new Jedi({ schema: schema, startValue: value, refParser: false })
      const oneOfErrors = oneOfEditor.getErrors()
      oneOfEditor.destroy()

      if (oneOfErrors.length === 0) {
        counter++
      }

      extraMessages = [...extraMessages, JSON.stringify(schema)]
    })

    if (counter !== 1) {
      errors.push({
        messages: [
          'Must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
          ...extraMessages
        ],
        path: path
      })
    }
  }

  return errors
}
