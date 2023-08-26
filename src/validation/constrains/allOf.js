import { isSet, removeDuplicatesFromArray } from '../../helpers/utils'
import Jedi from '../../jedi'
import { getSchemaAllOf } from '../../helpers/schema'

export function allOf (validator, value, schema, key, path) {
  let errors = []
  const schemaAllOf = getSchemaAllOf(schema)

  if (isSet(schemaAllOf)) {
    schemaAllOf.forEach((schema) => {
      const subSchemaEditor = new Jedi({ schema: schema, startValue: value, rootName: key, refParser: false })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()
      errors = [...errors, ...subSchemaErrors]
      errors = removeDuplicatesFromArray(errors)
    })
  }

  return errors
}
