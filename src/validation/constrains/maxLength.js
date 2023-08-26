import { compileTemplate, isSet, isString } from '../../helpers/utils'
import { getSchemaMaxLength } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function maxLength (validator, value, schema, key, path) {
  const errors = []
  const maxLength = getSchemaMaxLength(schema)

  if (isString(value) && isSet(maxLength)) {
    value = value.replace(/[\uDCA9]/g, '') // remove Unicode code points
    const invalid = (value.length > maxLength)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMaxLength, {
            maxLength: maxLength
          })
        ],
        path: path
      })
    }
  }

  return errors
}
