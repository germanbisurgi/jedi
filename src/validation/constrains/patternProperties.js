import { isObject, isSet } from '../../utils'
import Jedi from '../../jedi'

export const patternProperties = (validator, value, schema, path) => {
  let errors = []

  if (isObject(value) && isSet(schema.patternProperties())) {
    const patternProperties = schema.patternProperties()

    Object.keys(value).forEach((propertyName) => {
      Object.keys(patternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          const schema = patternProperties[pattern]

          const editor = new Jedi({
            schema: schema,
            startValue: value[propertyName],
            refParser: false
          })

          const editorErrors = editor.getErrors().map((error) => {
            return {
              message: error.message,
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
