import Schema from '../../schema'

export const _allOf = (validator, value, schema, key, path) => {
  let errors = []

  if (schema.allOf()) {
    schema.allOf().forEach((schema) => {
      const allOfErrors = validator.validate(value, new Schema(schema), key, path)
      errors = [...errors, ...allOfErrors]
    })
  }

  return errors
}
