import { isSet, removeDuplicatesFromArray } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import { getSchemaAllOf } from '../../helpers/schema.js'

export function allOf (validator, value, schema, key, path) {
  let errors = []
  const allOf = getSchemaAllOf(schema)

  if (isSet(allOf)) {
    allOf.forEach((schema) => {
      const subSchemaEditor = new Jedi({ refParser: validator.refParser, schema, data: value, rootName: key })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()

      subSchemaErrors.forEach((error) => {
        error.path = path
      })

      errors.push(...subSchemaErrors)
    })

    errors = removeDuplicatesFromArray(errors)
  }

  return errors
}
