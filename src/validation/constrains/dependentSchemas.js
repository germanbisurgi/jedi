import { isObject, isSet } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaDependentSchemas } from '../../helpers/schema'

export function dependentSchemas (validator, value, schema, key, path) {
  let errors = []
  const dependentSchemas = getSchemaDependentSchemas(schema)

  if (isObject(value) && isSet(dependentSchemas)) {
    Object.keys(dependentSchemas).forEach((key) => {
      if (isSet(value[key])) {
        const dependentSchema = dependentSchemas[key]
        const tmpEditor = new Jedi({ refParser: validator.refParser,  XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: dependentSchema, data: value })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()
        errors = [...errors, ...tmpErrors]
      }
    })
  }

  return errors
}
