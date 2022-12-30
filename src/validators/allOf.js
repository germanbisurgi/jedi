import Schema from '../schema'

class AllOf {
  validate (value, schema, key, path, validator) {
    let errors = []

    if (schema.allOf()) {
      schema.allOf().forEach((schema) => {
        const allOfErrors = validator.validate(value, new Schema(schema), key, path)
        errors = [...errors, ...allOfErrors]
      })
    }

    return errors
  }
}

export default AllOf
