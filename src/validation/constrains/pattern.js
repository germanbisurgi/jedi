import { compileTemplate, isSet, isString } from '../../helpers/utils'
import { getSchemaPattern } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function pattern (validator, value, schema, key, path) {
  const errors = []
  const pattern = getSchemaPattern(schema)

  if (isString(value) && isSet(pattern)) {
    const regexp = new RegExp(pattern)
    const invalid = !regexp.test(value)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorPattern, {
            pattern: pattern
          })
        ],
        path: path
      })
    }
  }

  return errors
}
