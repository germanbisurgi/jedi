import { compileTemplate, isNumber, isSet } from '../../helpers/utils'
import { getSchemaMaximum } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function maximum (validator, value, schema, key, path) {
  const errors = []
  const maximum = getSchemaMaximum(schema)

  if (isNumber(value) && isSet(maximum)) {
    const invalid = (value > maximum)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMaximum, {
            maximum: maximum
          })
        ],

        path: path
      })
    }
  }

  return errors
}
