import { compileTemplate, isSet, isString } from '../../helpers/utils'
import { getSchemaMinLength } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function minLength (validator, value, schema, key, path) {
  const errors = []
  const minLength = getSchemaMinLength(schema)

  if (isString(value) && isSet(minLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length < minLength)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMinLength, {
            minLength: minLength
          })
        ],
        path: path,
        constrain: 'minLength'
      })
    }
  }

  return errors
}
