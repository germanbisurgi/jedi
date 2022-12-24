class ConstValidator {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.const()) {
      const valueIsNotEqualConst = (JSON.stringify(value) !== JSON.stringify(schema.const()))
      const invalid = (valueIsNotEqualConst)
      const field = schema.title() ? schema.title() : key

      if (invalid) {
        errors.push({
          message: field + ' must have value: ' + JSON.stringify(schema.const()),
          path: path
        })
      }
    }

    return errors
  }
}

export default ConstValidator
