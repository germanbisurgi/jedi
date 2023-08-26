import { compileTemplate, isNumber, isSet } from '../../helpers/utils'
import { getSchemaExclusiveMaximum } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function exclusiveMaximum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMaximum = getSchemaExclusiveMaximum(schema)

  if (isNumber(value) && isSet(exclusiveMaximum)) {
    const invalid = (value >= exclusiveMaximum)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorExclusiveMaximum, {
            exclusiveMaximum: exclusiveMaximum
          })
        ],
        path: path
      })
    }
  }

  return errors
}
