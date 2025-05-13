import { isObject, isSet } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaDependentSchemas } from '../../helpers/schema.js'

export function dependentSchemas (context) {
  let errors = []
  const dependentSchemas = getSchemaDependentSchemas(context.schema)

  if (isObject(context.value) && isSet(dependentSchemas)) {
    Object.keys(dependentSchemas).forEach((key) => {
      if (isSet(context.value[key])) {
        const dependentSchema = dependentSchemas[key]
        const tmpEditor = new Jedison({ refParser: context.validator.refParser, schema: dependentSchema, data: context.value })
        const tmpErrors = tmpEditor.getErrors()
        tmpEditor.destroy()
        errors = [...errors, ...tmpErrors]
      }
    })
  }

  return errors
}
