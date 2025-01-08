import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaMaxProperties } from '../../helpers/schema.js'

export function maxProperties (validator, value, schema, key, path) {
  const errors = []
  const maxProperties = getSchemaMaxProperties(schema)

  if (isObject(value) && isSet(maxProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount > maxProperties)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'maxProperties',
        messages: [
          compileTemplate(validator.translator.translate('errorMaxProperties'), {
            maxProperties: maxProperties
          })
        ]
      })
    }
  }

  return errors
}
