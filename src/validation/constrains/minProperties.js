import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaMinProperties } from '../../helpers/schema.js'

export function minProperties (validator, value, schema, key, path) {
  const errors = []
  const minProperties = getSchemaMinProperties(schema)

  if (isObject(value) && isSet(minProperties)) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount < minProperties)

    if (invalid) {
      errors.push({
        path: path,
        constrain: 'minProperties',
        messages: [
          compileTemplate(validator.translator.translate('errorMinProperties'), {
            minProperties: minProperties
          })
        ]
      })
    }
  }

  return errors
}
