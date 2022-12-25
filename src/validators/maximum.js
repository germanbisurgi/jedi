class Maximum {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIsNumeric() && schema.maximum()) {
      const computedMaximum = schema.exclusiveMaximum() ? schema.maximum() - 1 : schema.maximum()
      const invalid = (value > computedMaximum)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be less than ' + computedMaximum,
          path: path
        })
      }
    }

    return errors
  }
}

export default Maximum
