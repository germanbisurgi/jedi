import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaExclusiveMaximum } from '../../helpers/schema.js'

export function exclusiveMaximum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMaximum = getSchemaExclusiveMaximum(schema)

  if (isNumber(value) && isSet(exclusiveMaximum)) {
    const invalid = (value >= exclusiveMaximum)

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'exclusiveMaximum',
        messages: [
          compileTemplate(validator.translator.translate('errorExclusiveMaximum'), {
            exclusiveMaximum: exclusiveMaximum
          })
        ]
      })
    }
  }

  return errors
}
