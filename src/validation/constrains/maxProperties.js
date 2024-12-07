import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaMaxProperties } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

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
          compileTemplate(i18n.errorMaxProperties, {
            maxProperties: maxProperties
          })
        ]
      })
    }
  }

  return errors
}
