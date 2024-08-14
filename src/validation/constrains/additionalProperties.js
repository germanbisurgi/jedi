/**
 * Constrains additionalProperties
 */

import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils.js'
import Validator from '../../validator.js'
import { getSchemaAdditionalProperties, getSchemaPatternProperties, getSchemaProperties } from '../../helpers/schema.js'
import { i18n } from '../../i18n.js'

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
            messages: [
              compileTemplate(i18n.errorAdditionalProperties, { property })
            ],
            path,
            constrain: 'additionalProperties'
          })
        } else if (isObject(additionalProperties)) {
          const editor = new Validator({
            refParser: validator.refParser,
            schema: additionalProperties,
            data: value[property]
          })

          const additionalPropertyErrors = editor.getErrors().map((error) => ({
            messages: error.messages,
            path: `${path}.${property}`,
            constrain: 'additionalProperties'
          }))

          errors.push(...additionalPropertyErrors)
          editor.destroy()
        }
      }
    })
  }

  return errors
}
