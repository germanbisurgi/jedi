import { isSet } from '../../helpers/utils'
import { getSchemaNot } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function not (validator, value, schema, key, path) {
  const errors = []
  const not = getSchemaNot(schema)

  if (isSet(not)) {
    const notErrors = validator.getErrors(value, not, key, path)

    const invalid = notErrors.length === 0

    if (invalid) {
      errors.push({
        messages: [
          i18n.errorNot
        ],
        path: path
      })
    }
  }

  return errors
}
