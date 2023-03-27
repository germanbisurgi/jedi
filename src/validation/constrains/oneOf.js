import { isSet } from '../../utils'
import Jedi from '../../jedi'

export const _oneOf = (validator, value, schema, key, path) => {
  const errors = []

  if (isSet(schema.oneOf())) {
    let counter = 0

    schema.oneOf().forEach((schema) => {
      const oneOfEditor = new Jedi({ schema: schema, startValue: value, refParser: false })
      const oneOfErrors = oneOfEditor.validate()
      oneOfEditor.destroy()

      if (oneOfErrors.length === 0) {
        counter++
      }
    })

    if (counter !== 1) {
      errors.push({
        message: 'Must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
        path: path
      })
    }
  }

  return errors
}
