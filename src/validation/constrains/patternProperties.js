import { isObject, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaPatternProperties } from '../../helpers/schema'

export function patternProperties (validator, value, schema, path) {
  let errors = []
  const atternProperties = getSchemaPatternProperties(schema)

  if (isObject(value) && isSet(atternProperties)) {
    const patternProperties = atternProperties

    Object.keys(value).forEach((propertyName) => {
      Object.keys(patternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          const schema = patternProperties[pattern]

          const editor = new Jedi({
            schema: schema,
            data: value[propertyName]
          })

          const editorErrors = editor.getErrors().map((error) => {
            return {
              messages: error.messages,
              path: path + '/' + propertyName
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
