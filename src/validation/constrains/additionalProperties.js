/**
 * constrains additionalProperties
 */

import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaAdditionalProperties, getSchemaPatternProperties, getSchemaProperties } from '../../helpers/schema'
import { i18n } from '../../i18n'

export function additionalProperties (validator, value, schema, key, path) {
  let errors = []
  const schemaAdditionalProperties = getSchemaAdditionalProperties(schema)
  const schemaPatternProperties = getSchemaPatternProperties(schema)
  const schemaProperties = getSchemaProperties(schema)

  if (isObject(value) && isSet(schemaAdditionalProperties)) {
    const properties = isSet(schemaProperties) ? schemaProperties : {}
    const additionalProperties = schemaAdditionalProperties
    const patternProperties = schemaPatternProperties

    if (properties) {
      Object.keys(value).forEach((property) => {
        let definedInPatternProperty = false

        if (isSet(patternProperties)) {
          Object.keys(patternProperties).forEach((pattern) => {
            const regexp = new RegExp(pattern)
            definedInPatternProperty = regexp.test(property)
          })
        }

        if (!definedInPatternProperty && additionalProperties === false && !hasOwn(properties, property)) {
          errors.push({
            messages: [
              compileTemplate(i18n.errorAdditionalProperties, {
                property: property
              })
            ],
            path: path
          })
        }

        if (!definedInPatternProperty && isObject(additionalProperties) && !hasOwn(properties, property)) {
          const editor = new Jedi({
            XMLHttpRequest: validator.refParser.XMLHttpRequest,
            schema: additionalProperties,
            data: value[property]
          })

          const additionalPropertyErrors = editor.getErrors().map((error) => {
            return {
              messages: error.messages,
              path: property
            }
          })

          errors = [...errors, ...additionalPropertyErrors]

          editor.destroy()
        }
      })
    }
  }

  return errors
}
