import { isObject, isSet } from '../../utils'
import Jedi from '../../jedi'

export function dependentSchemas (validator, value, schema, key, path) {
  let errors = []

  if (isObject(value) && isSet(schema.dependentSchemas())) {
    Object.keys(schema.dependentSchemas()).forEach((key) => {
      if (isSet(value[key])) {
        const dependentSchema = schema.dependentSchemas()[key]
        const tmpEditor = new Jedi({ schema: dependentSchema, startValue: value, refParser: false })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()
        errors = [...errors, ...tmpErrors]
      }
    })
  }

  return errors
}
