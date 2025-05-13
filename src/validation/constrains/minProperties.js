import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaMinProperties } from '../../helpers/schema.js'

export function minProperties (context) {
  const errors = []
  const minProperties = getSchemaMinProperties(context.schema)

  if (isObject(context.value) && isSet(minProperties)) {
    const propertiesCount = Object.keys(context.value).length
    const invalid = (propertiesCount < minProperties)

    if (invalid) {
      errors.push({
        type: 'error',
        path: context.path,
        constraint: 'minProperties',
        messages: [
          compileTemplate(context.translator.translate('errorMinProperties'), {
            minProperties: minProperties
          })
        ]
      })
    }
  }

  return errors
}
