class MaxLengthValidator {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIs('string') && schema.maxLength()) {
      const invalid = (value.length > schema.maxLength())
      const field = schema.title() ? schema.title() : key

      if (invalid) {
        errors.push({
          message: field + ' must be at most ' + schema.maxLength() + ' characters long',
          path: path
        })
      }
    }

    return errors
  }
}

export default MaxLengthValidator
