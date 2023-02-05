import Schema from '../../schema'
import { isSet } from '../../utils'

export const _oneOf = (validator, value, schema, key, path) => {
  const errors = []

  if (isSet(schema.oneOf())) {
    let counter = 0

    schema.oneOf().forEach((schema) => {
      const oneOfErrors = validator.validate(value, new Schema(schema), key, path)

      if (oneOfErrors.length === 0) {
        counter++
      }
    })

    if (counter !== 1) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must validate against exactly one of the provided schemas. It currently validates against ' + counter + ' of the schemas.',
        path: path
      })
    }
  }

  return errors
}
