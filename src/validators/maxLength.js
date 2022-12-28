class MaxLength {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIs('string') && schema.maxLength()) {
      const invalid = (value.length > schema.maxLength())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be at most ' + schema.maxLength() + ' characters long',
          path: path
        })
      }
    }

    return errors
  }
}

export default MaxLength
