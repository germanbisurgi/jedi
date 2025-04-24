import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaExclusiveMinimum } from '../../helpers/schema.js'

export function exclusiveMinimum (validator, value, schema, key, path) {
  const errors = []
  const exclusiveMinimum = getSchemaExclusiveMinimum(schema)

  if (isNumber(value) && isSet(exclusiveMinimum)) {
    const invalid = (value <= exclusiveMinimum)

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'exclusiveMinimum',
        messages: [
          compileTemplate(validator.translator.translate('errorExclusiveMinimum'), {
            exclusiveMinimum: exclusiveMinimum
          })
        ]
      })
    }
  }

  return errors
}
