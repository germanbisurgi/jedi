import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaProperties } from '../../helpers/schema.js'

export function properties (context) {
  const schemaProperties = getSchemaProperties(context.schema)
  const invalidProperties = []

  if (isObject(context.value) && isSet(schemaProperties)) {
    Object.keys(schemaProperties).forEach((propertyName) => {
      if (hasOwn(context.value, propertyName)) {
        const propertySchema = schemaProperties[propertyName]

        const editor = new Jedison({
          refParser: context.validator.refParser,
          schema: propertySchema,
          data: context.value[propertyName],
          rootName: context.path
        })

        if (editor.getErrors().length > 0) {
          invalidProperties.push(propertyName)
        }

        editor.destroy()
      }
    })
  }

  if (invalidProperties.length > 0) {
    return [{
      type: 'error',
      path: context.path,
      constraint: 'properties',
      messages: [
        compileTemplate(context.translator.translate('errorProperties'), { properties: invalidProperties.join(', ') })
      ]
    }]
  }

  return []
}
