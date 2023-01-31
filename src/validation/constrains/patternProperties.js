import { isObject } from '../../utils'
import Jedi from '../../index'

export const _patternProperties = (validator, value, schema) => {
  let errors = []

  if (isObject(value) && schema.patternProperties()) {
    const patternProperties = schema.patternProperties()

    Object.keys(value).forEach((propertyName) => {
      Object.keys(patternProperties).forEach((pattern) => {
        const regexp = new RegExp(pattern)
        if (regexp.test(propertyName)) {
          const schema = patternProperties[pattern]
          schema.title = propertyName

          const editor = new Jedi({
            schema: schema,
            startValue: value[propertyName]
          })

          errors = [...errors, ...editor.validate()]
        }
      })
    })
  }

  return errors
}
