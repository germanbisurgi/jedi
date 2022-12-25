class MaximumValidator {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIsNumeric() && schema.maximum()) {
      const invalid = (value > schema.maximum())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be less than ' + schema.maximum(),
          path: path
        })
      }
    }

    return errors
  }
}

export default MaximumValidator
