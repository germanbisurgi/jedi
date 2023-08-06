import { isSet } from '../../utils'
import Jedi from '../../jedi'

export function allOf (validator, value, schema, key, path) {
  let errors = []

  if (isSet(schema.allOf())) {
    schema.allOf().forEach((schema) => {
      const subSchemaEditor = new Jedi({ schema: schema, startValue: value, rootName: key, refParser: false })
      const subSchemaErrors = subSchemaEditor.getErrors()
      subSchemaEditor.destroy()
      errors = [...errors, ...subSchemaErrors]
    })
  }

  return errors
}
