import { hasOwn, isObject, isSet } from '../../utils'
import SchemaTools from '../../index'

export const _additionalProperties = (validator, value, schema, key, path) => {
  let errors = []

  if (isObject(value) && isSet(schema.additionalProperties())) {
    const properties = isSet(schema.properties()) ? schema.properties() : {}
    const additionalProperties = schema.additionalProperties()
    const patternProperties = schema.patternProperties()

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
            message: `Property "${property}" has not been defined and the schema does not allow additional properties.`,
            path: path
          })
        }

        if (!definedInPatternProperty && isObject(additionalProperties) && !hasOwn(properties, property)) {
          const editor = new SchemaTools.Jedi({
            rootName: property,
            schema: additionalProperties,
            startValue: value[property]
          })

          const additionalPropertyErrors = editor.validate().map((error) => {
            return {
              message: error.message,
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
