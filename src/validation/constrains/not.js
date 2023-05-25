import Schema from '../../schema'
import { isSet } from '../../utils'

export const not = (validator, value, schema, key, path) => {
  const errors = []

  if (isSet(schema.not())) {
    const notErrors = validator.validate(value, new Schema(schema.not()), key, path)

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        message: 'Must not validate against the provided schema.',
        path: path
      })
    }
  }

  return errors
}
