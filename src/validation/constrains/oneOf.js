import { isSet } from '../../utils'
import Jedi from '../../jedi'

export const oneOf = (validator, value, schema, key, path) => {
  const errors = []
  let extraMessages = []

  if (isSet(schema.oneOf())) {
    let counter = 0

    schema.oneOf().forEach((schema) => {
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
