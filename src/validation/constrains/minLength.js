import { compileTemplate, isSet, isString } from '../../helpers/utils.js'
import { getSchemaMinLength } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function minLength (validator, value, schema, key, path) {
  const errors = []
  const minLength = getSchemaMinLength(schema)

  if (isString(value) && isSet(minLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length < minLength)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'minLength',
        messages: [
          compileTemplate(i18n.errorMinLength, {
            minLength: minLength
          })
        ]
      })
    }
  }

  return errors
}
