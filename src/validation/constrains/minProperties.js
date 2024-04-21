import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaMinProperties } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function minProperties (validator, value, schema, key, path) {
  const errors = []
  const minProperties = getSchemaMinProperties(schema)

  if (isObject(value) && isSet(minProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount < minProperties)

    if (invalid) {
      errors.push({
        messages: [
          compileTemplate(i18n.errorMinProperties, {
            minProperties: minProperties
          })
        ],
        path: path,
        constrain: 'minProperties'
      })
    }
  }

  return errors
}
