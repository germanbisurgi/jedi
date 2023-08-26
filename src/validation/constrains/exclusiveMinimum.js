import { compileTemplate, isNumber, isSet } from '../../helpers/utils'
import { getSchemaExclusiveMinimum } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function exclusiveMinimum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMinimum = getSchemaExclusiveMinimum(schema)

  if (isNumber(value) && isSet(exclusiveMinimum)) {
    const invalid = (value <= exclusiveMinimum)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorExclusiveMinimum, {
            exclusiveMinimum: exclusiveMinimum
          })
        ],
        path: path
      })
    }
  }

  return errors
}
