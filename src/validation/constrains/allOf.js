import { isSet } from '../../utils'
import SchemaTools from '../../index'

export const _allOf = (validator, value, schema, key, path) => {
  let errors = []

  if (isSet(schema.allOf())) {
    schema.allOf().forEach((schema) => {
      const subSchemaEditor = new SchemaTools.Jedi({ schema: schema, startValue: value, rootName: key })
      const subSchemaErrors = subSchemaEditor.validate()
      subSchemaEditor.destroy()
      errors = [...errors, ...subSchemaErrors]
    })
  }

  return errors
}
