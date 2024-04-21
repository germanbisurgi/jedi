import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaExclusiveMinimum } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

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
        path: path,
        constrain: 'exclusiveMinimum'
      })
    }
  }

  return errors
}
