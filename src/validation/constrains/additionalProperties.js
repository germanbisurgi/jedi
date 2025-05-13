/**
 * Constrains additionalProperties
 */

import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaAdditionalProperties, getSchemaPatternProperties, getSchemaProperties } from '../../helpers/schema.js'

export function additionalProperties (context) {
  const errors = []
  const schemaAdditionalProperties = getSchemaAdditionalProperties(context.schema)
  const schemaPatternProperties = getSchemaPatternProperties(context.schema)
  const schemaProperties = getSchemaProperties(context.schema)

  if (isObject(context.value) && isSet(schemaAdditionalProperties)) {
    const properties = schemaProperties || {}
    const additionalProperties = schemaAdditionalProperties
    const patternProperties = schemaPatternProperties || {}

    Object.keys(context.value).forEach((property) => {
      const definedInPatternProperty = Object.keys(patternProperties).some((pattern) => {
        const regexp = new RegExp(pattern)
        return regexp.test(property)
      })

      const isDefinedInProperties = hasOwn(properties, property)

      if (!definedInPatternProperty && !isDefinedInProperties) {
        if (additionalProperties === false) {
          errors.push({
            path: context.path,
            constraint: 'additionalProperties',
            messages: [
              compileTemplate(context.translator.translate('errorAdditionalProperties'), { property })
            ]
          })
        } else if (isObject(additionalProperties)) {
          const editor = new Jedison({
            refParser: context.validator.refParser,
            schema: additionalProperties,
            data: context.value[property]
          })

          const additionalPropertyErrors = editor.getErrors().map((error) => ({
            path: `${context.path}.${property}`,
            constraint: 'additionalProperties',
            messages: error.messages
          }))

          errors.push(...additionalPropertyErrors)
          editor.destroy()
        }
      }
    })
  }

  return errors
}
