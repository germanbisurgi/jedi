import { isObject, isSet } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import { getSchemaPatternProperties } from '../../helpers/schema.js'

export function patternProperties (validator, value, schema, key, path) {
  let errors = []
  const patternProperties = getSchemaPatternProperties(schema)

  if (isObject(value) && isSet(patternProperties)) {
    Object.keys(value).forEach((propertyName) => {
      Object.keys(patternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          const schema = patternProperties[pattern]

          const editor = new Jedi({
            refParser: validator.refParser,
            schema: schema,
            data: value[propertyName]
          })

          const editorErrors = editor.getErrors().map((error) => {
            return {
              path: path + '/' + propertyName,
              constrain: 'patternProperties',
              messages: error.messages
            }
          })

          errors = [...errors, ...editorErrors]

          editor.destroy()
        }
      })
    })
  }

  return errors
}
