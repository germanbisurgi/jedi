import { compileTemplate, isSet, isString } from '../../helpers/utils.js'
import { getSchemaMaxLength } from '../../helpers/schema.js'

export function maxLength (validator, value, schema, key, path) {
  const errors = []
  const maxLength = getSchemaMaxLength(schema)

  if (isString(value) && isSet(maxLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length > maxLength)

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'maxLength',
        messages: [
          compileTemplate(validator.translator.translate('errorMaxLength'), {
            maxLength: maxLength
          })
        ]
      })
    }
  }

  return errors
}
