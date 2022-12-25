class Minimum {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIsNumeric() && schema.minimum()) {
      const computedMinimum = schema.exclusiveMinimum() ? schema.minimum() + 1 : schema.minimum()
      const invalid = (value < computedMinimum)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be at least ' + computedMinimum,
          path: path
        })
      }
    }

    return errors
  }
}

export default Minimum
