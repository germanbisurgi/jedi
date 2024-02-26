import { compileTemplate, isNumber, isSet } from '../../helpers/utils'
import { getSchemaMinimum } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function minimum (validator, value, schema, key, path) {
  const errors = []
  const minimum = getSchemaMinimum(schema)

  if (isNumber(value) && isSet(minimum)) {
    const invalid = (value < minimum)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMinimum, {
            minimum: minimum
          })
        ],
        path: path,
        constrain: 'minimum'
      })
    }
  }

  return errors
}
