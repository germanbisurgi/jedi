import { compileTemplate, isObject, isSet } from '../../helpers/utils'
import { getSchemaMinProperties } from '../../helpers/schema'
import { i18n } from '../../i18n'

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
        path: path
      })
    }
  }

  return errors
}
