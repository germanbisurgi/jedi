import { compileTemplate, isSet, isString } from '../../helpers/utils.js'
import { getSchemaPattern } from '../../helpers/schema.js'

export function pattern (validator, value, schema, key, path) {
  const errors = []
  const pattern = getSchemaPattern(schema)

  if (isString(value) && isSet(pattern)) {
    const regexp = new RegExp(pattern)
    const invalid = !regexp.test(value)

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'pattern',
        messages: [
          compileTemplate(validator.translator.translate('errorPattern'), {
            pattern: pattern
          })
        ]
      })
    }
  }

  return errors
}
