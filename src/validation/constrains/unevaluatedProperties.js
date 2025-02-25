/**
 * constrains unevaluatedProperties
 */

import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import {
  getSchemaUnevaluatedProperties,
  getSchemaPatternProperties,
  getSchemaProperties,
  getSchemaAnyOf, getSchemaAllOf, getSchemaOneOf
} from '../../helpers/schema.js'

export function unevaluatedProperties (validator, value, schema, key, path) {
  let errors = []
  const schemaUnevaluatedProperties = getSchemaUnevaluatedProperties(schema)
  const schemaPatternProperties = getSchemaPatternProperties(schema)
  const schemaProperties = getSchemaProperties(schema)
  const schemaAllOf = getSchemaAllOf(schema)
  const schemaAnyOf = getSchemaAnyOf(schema)
  const schemaOneOf = getSchemaOneOf(schema)

  if (isObject(value) && isSet(schemaUnevaluatedProperties)) {
    let properties = isSet(schemaProperties) ? schemaProperties : {}
    const unevaluatedProperties = schemaUnevaluatedProperties
    const patternProperties = schemaPatternProperties

    // see through allOf, anyOf and oneOf
    const ofSchemas = [
      schemaAllOf,
      schemaAnyOf,
      schemaOneOf
    ]

    ofSchemas.forEach((subSchema) => {
      if (isSet(subSchema)) {
        subSchema.forEach((subschema) => {
          if (isSet(subschema['properties'])) {
            properties = { ...properties, ...subschema['properties'] }
          }
        })
      }
    })

    if (properties) {
      Object.keys(value).forEach((property) => {
        let definedInPatternProperty = false

        if (isSet(patternProperties)) {
          Object.keys(patternProperties).forEach((pattern) => {
            const regexp = new RegExp(pattern)
            definedInPatternProperty = regexp.test(property)
          })
        }

        if (!definedInPatternProperty && unevaluatedProperties === false && !hasOwn(properties, property)) {
          errors.push({
            path: path,
            constrain: 'unevaluatedProperties',
            messages: [
              compileTemplate(validator.translator.translate('errorUnevaluatedProperties'), {
                property: property
              })
            ]
          })
        }

        if (!definedInPatternProperty && isObject(unevaluatedProperties) && !hasOwn(properties, property)) {
          const editor = new Jedi({
            refParser: validator.refParser,
            schema: unevaluatedProperties,
            data: value[property]
          })

          const unevaluatedPropertiesErrors = editor.getErrors().map((error) => {
            return {
              path: property,
              constrain: 'unevaluatedProperties',
              messages: error.messages
            }
          })

          errors = [...errors, ...unevaluatedPropertiesErrors]

          editor.destroy()
        }
      })
    }
  }

  return errors
}
