import Schema from '../schema'

class If {
  validate (value, schema, key, path, validator) {
    let errors = []

    if (schema.if()) {
      if (!schema.then() || !schema.else()) {
        return errors
      }

      const ifErrors = validator.validate(value, new Schema(schema.if()))

      if (ifErrors.length > 0) {
        errors = validator.validate(value, new Schema(schema.then()))
      } else {
        errors = validator.validate(value, new Schema(schema.else()))
      }
    }

    return errors
  }
}

export default If
