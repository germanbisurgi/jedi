import { isSet, removeDuplicatesFromArray } from '../../helpers/utils.js'
import Jedi from '../../jedi.js'
import { getSchemaAllOf } from '../../helpers/schema.js'

export function allOf (validator, value, schema, key) {
  let errors = []
  const allOf = getSchemaAllOf(schema)

  if (isSet(allOf)) {
    allOf.forEach((schema) => {
      const subSchemaEditor = new Jedi({ refParser: validator.refParser, schema: schema, data: value, rootName: key })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()
      errors = [...errors, ...subSchemaErrors]
      errors = removeDuplicatesFromArray(errors)
    })
  }

  return errors
}
