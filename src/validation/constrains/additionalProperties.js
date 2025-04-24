/**
 * Constrains additionalProperties
 */

import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import { getSchemaAdditionalProperties, getSchemaPatternProperties, getSchemaProperties } from '../../helpers/schema.js'

export function additionalProperties (validator, value, schema, key, path) {
  const errors = []
  const schemaAdditionalProperties = getSchemaAdditionalProperties(schema)
  const schemaPatternProperties = getSchemaPatternProperties(schema)
  const schemaProperties = getSchemaProperties(schema)

  if (isObject(value) && isSet(schemaAdditionalProperties)) {
    const properties = schemaProperties || {}
    const additionalProperties = schemaAdditionalProperties
    const patternProperties = schemaPatternProperties || {}

    Object.keys(value).forEach((property) => {
      const definedInPatternProperty = Object.keys(patternProperties).some((pattern) => {
        const regexp = new RegExp(pattern)
        return regexp.test(property)
      })

      const isDefinedInProperties = hasOwn(properties, property)

      if (!definedInPatternProperty && !isDefinedInProperties) {
        if (additionalProperties === false) {
          errors.push({
            path,
            constraint: 'additionalProperties',
            messages: [
              compileTemplate(validator.translator.translate('errorAdditionalProperties'), { property })
            ]
          })
        } else if (isObject(additionalProperties)) {
          const editor = new Jedi({
            refParser: validator.refParser,
            schema: additionalProperties,
            data: value[property]
          })

          const additionalPropertyErrors = editor.getErrors().map((error) => ({
            path: `${path}.${property}`,
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
