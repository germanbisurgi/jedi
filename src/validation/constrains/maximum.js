import { compileTemplate, isNumber, isSet } from '../../helpers/utils.js'
import { getSchemaMaximum } from '../../helpers/schema.js'

export function maximum (validator, value, schema, key, path) {
  const errors = []
  const maximum = getSchemaMaximum(schema)

  if (isNumber(value) && isSet(maximum)) {
    const invalid = (value > maximum)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'maximum',
        messages: [
          compileTemplate(validator.translator.translate('errorMaximum'), {
            maximum: maximum
          })
        ]
      })
    }
  }

  return errors
}
