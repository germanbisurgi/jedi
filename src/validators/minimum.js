class Minimum {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIsNumeric() && schema.minimum()) {
      const invalid = (value < schema.minimum())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be at least ' + (schema.minimum()),
          path: path
        })
      }
    }

    return errors
  }
}

export default Minimum
