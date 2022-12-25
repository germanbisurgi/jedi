class Pattern {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIs('string') && schema.pattern()) {
      const regexp = new RegExp(schema.pattern())
      const invalid = !regexp.test(value)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be the pattern: ' + schema.pattern(),
          path: path
        })
      }
    }

    return errors
  }
}

export default Pattern
