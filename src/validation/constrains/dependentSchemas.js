import { isObject, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaDependentSchemas } from '../../helpers/schema'

export function dependentSchemas (validator, value, schema, key, path) {
  let errors = []
  const schemaDependentSchemas = getSchemaDependentSchemas(schema)

  if (isObject(value) && isSet(schemaDependentSchemas)) {
    Object.keys(schemaDependentSchemas).forEach((key) => {
      if (isSet(value[key])) {
        const dependentSchema = schemaDependentSchemas[key]
        const tmpEditor = new Jedi({ schema: dependentSchema, startValue: value, refParser: false })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()
        errors = [...errors, ...tmpErrors]
      }
    })
  }

  return errors
}
