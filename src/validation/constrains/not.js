import { isSet } from '../../helpers/utils'
import { getSchemaNot } from '../../helpers/schema'

export function not (validator, value, schema, key, path) {
  const errors = []
  const schemaNot = getSchemaNot(schema)

  if (isSet(schemaNot)) {
    const notErrors = validator.getErrors(value, schemaNot, key, path)

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        messages: ['Must not validate against the provided schema'],
        path: path
      })
    }
  }

  return errors
}
