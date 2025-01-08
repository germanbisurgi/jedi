import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaMinimum } from '../../helpers/schema.js'

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
          compileTemplate(validator.translator.translate('errorMinimum'), {
            minimum: minimum
          })
        ]
      })
    }
  }

  return errors
}
