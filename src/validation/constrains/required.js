import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaRequired } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function required (validator, value, schema, key, path) {
  const errors = []
  const required = getSchemaRequired(schema)

  if (isObject(value) && isSet(required)) {
    const missingProperties = []
    const keys = Object.keys(value)

    required.forEach((key) => {
      if (!keys.includes(key)) {
        missingProperties.push(key)
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorRequired, {
            required: missingProperties.join(', ')
          })
        ],
        path: path,
        constrain: 'required'
      })
    }
  }

  return errors
}
