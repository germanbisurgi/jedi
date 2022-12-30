import Schema from '../schema'

class AnyOf {
  validate (value, schema, key, path, validator) {
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
}

export default AnyOf
