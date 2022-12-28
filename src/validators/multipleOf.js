class MultipleOf {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIsNumeric() && schema.multipleOf()) {
      const isMultipleOf = (value / schema.multipleOf() === Math.floor(value / schema.multipleOf()))
      const invalid = (!isMultipleOf)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be multiple of ' + schema.multipleOf(),
          path: path
        })
      }
    }

    return errors
  }
}

export default MultipleOf
