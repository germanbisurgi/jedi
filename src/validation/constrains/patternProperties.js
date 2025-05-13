import { isObject, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaPatternProperties } from '../../helpers/schema.js'

export function patternProperties (context) {
  let errors = []
  const patternProperties = getSchemaPatternProperties(context.schema)

  if (isObject(context.value) && isSet(patternProperties)) {
    Object.keys(context.value).forEach((propertyName) => {
      Object.keys(patternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          const schema = patternProperties[pattern]

          const editor = new Jedison({
            refParser: context.validator.refParser,
            schema: schema,
            data: context.value[propertyName]
          })

          const editorErrors = editor.getErrors().map((error) => {
            return {
              path: context.path + '/' + propertyName,
              constraint: 'patternProperties',
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
