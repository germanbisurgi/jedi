import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import { getSchemaProperties } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

export function properties (validator, value, schema, path) {
  const schemaProperties = getSchemaProperties(schema)
  const invalidProperties = []

  if (isObject(value) && isSet(schemaProperties)) {
    Object.keys(schemaProperties).forEach((propertyName) => {
      if (hasOwn(value, propertyName)) {
        const propertySchema = schemaProperties[propertyName]

        const editor = new Jedi({
          refParser: validator.refParser,
          schema: propertySchema,
          data: value[propertyName]
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
      messages: [
        compileTemplate(i18n.errorProperties, { properties: invalidProperties.join(', ') })
      ],
      path: path,
      constraint: 'properties'
    }]
  }

  return []
}
