import Schema from '../../schema'

export const _anyOf = (validator, value, schema, key, path) => {
  const errors = []

  if (schema.anyOf()) {
    const valid = schema.anyOf().some((schema) => {
      const anyOfErrors = validator.validate(value, new Schema(schema), key, path)
      return anyOfErrors.length === 0
    })

    if (!valid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + '  must validate against at least one of the provided schemas',
        path: path
      })
    }
  }

  return errors
}
