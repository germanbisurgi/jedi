class ExclusiveMaximum {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIsNumeric() && schema.exclusiveMaximum()) {
      const invalid = (value > schema.exclusiveMaximum() - 1)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be less than ' + schema.exclusiveMaximum(),
          path: path
        })
      }
    }

    return errors
  }
}

export default ExclusiveMaximum
