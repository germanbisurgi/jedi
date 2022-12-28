class ExclusiveMaximum {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIsNumeric() && schema.exclusiveMaximum()) {
      const computedMaximum = (schema.exclusiveMaximum() - 1)
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

export default ExclusiveMaximum
