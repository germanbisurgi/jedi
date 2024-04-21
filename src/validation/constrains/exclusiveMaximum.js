import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaExclusiveMaximum } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

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
        path: path,
        constrain: 'exclusiveMaximum'
      })
    }
  }

  return errors
}
