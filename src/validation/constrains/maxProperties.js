import { compileTemplate, isObject, isSet } from '../../helpers/utils'
import { getSchemaMaxProperties } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function maxProperties (validator, value, schema, key, path) {
  const errors = []
  const maxProperties = getSchemaMaxProperties(schema)

  if (isObject(value) && isSet(maxProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount > maxProperties)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMaxProperties, {
            maxProperties: maxProperties
          })
        ],
        path: path
      })
    }
  }

  return errors
}
