import { isSet, removeDuplicatesFromArray } from '../../helpers/utils.js'
import Jedison from '../../jedison.js'
import { getSchemaAllOf } from '../../helpers/schema.js'

export function allOf (context) {
// export function allOf (context) {
  let errors = []
  const allOf = getSchemaAllOf(context.schema)

  if (isSet(allOf)) {
    allOf.forEach((schema) => {
      const subSchemaEditor = new Jedison({ refParser: context.validator.refParser, schema, data: context.value, rootName: context.key })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()

      subSchemaErrors.forEach((error) => {
        error.path = context.path
      })

      errors.push(...subSchemaErrors)
    })

    errors = removeDuplicatesFromArray(errors)
  }

  return errors
}
