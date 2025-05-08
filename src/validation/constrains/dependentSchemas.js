import { isObject, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaDependentSchemas } from '../../helpers/schema.js'

export function dependentSchemas (validator, value, schema) {
  let errors = []
  const dependentSchemas = getSchemaDependentSchemas(schema)

  if (isObject(value) && isSet(dependentSchemas)) {
    Object.keys(dependentSchemas).forEach((key) => {
      if (isSet(value[key])) {
        const dependentSchema = dependentSchemas[key]
        const tmpEditor = new Jedison({ refParser: validator.refParser, schema: dependentSchema, data: value })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()
        errors = [...errors, ...tmpErrors]
      }
    })
  }

  return errors
}
