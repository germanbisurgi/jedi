import { compileTemplate, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaMaxProperties } from '../../helpers/schema.js'

export function maxProperties (context) {
  const errors = []
  const maxProperties = getSchemaMaxProperties(context.schema)

  if (isObject(context.value) && isSet(maxProperties)) {
    const propertiesCount = Object.keys(context.value).length
    const invalid = (propertiesCount > maxProperties)

    if (invalid) {
      errors.push({
        path: context.path,
        constraint: 'maxProperties',
        messages: [
          compileTemplate(context.translator.translate('errorMaxProperties'), {
            maxProperties: maxProperties
          })
        ]
      })
    }
  }

  return errors
}
