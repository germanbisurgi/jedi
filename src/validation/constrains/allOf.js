import { isSet, removeDuplicatesFromArray } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaAllOf } from '../../helpers/schema'

export function allOf (validator, value, schema, key, path) {
  let errors = []
  const allOf = getSchemaAllOf(schema)

  if (isSet(allOf)) {
    allOf.forEach((schema) => {
      const subSchemaEditor = new Jedi({ refParser: validator.refParser, XMLHttpRequest: validator.refParser.XMLHttpRequest, schema: schema, data: value, rootName: key })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()
      errors = [...errors, ...subSchemaErrors]
      errors = removeDuplicatesFromArray(errors)
    })
  }

  return errors
}
