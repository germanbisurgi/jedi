class MinLength {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIs('string') && schema.minLength()) {
      const invalid = (value.length < schema.minLength())
      const field = schema.title() ? schema.title() : key

      if (invalid) {
        errors.push({
          message: field + ' must be at least ' + schema.minLength() + ' characters long',
          path: path
        })
      }
    }

    return errors
  }
}

export default MinLength
