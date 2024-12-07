import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaMinimum } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function minimum (validator, value, schema, key, path) {
  const errors = []
  const minimum = getSchemaMinimum(schema)

  if (isNumber(value) && isSet(minimum)) {
    const invalid = (value < minimum)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'minimum',
        messages: [
          compileTemplate(i18n.errorMinimum, {
            minimum: minimum
          })
        ]
      })
    }
  }

  return errors
}
