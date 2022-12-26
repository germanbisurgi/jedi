class Enum {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.enum()) {
      const invalid = !schema.enum().some(e => JSON.stringify(value) === JSON.stringify(e))

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be one of the enumerated values: ' + JSON.stringify(schema.enum()),
          path: path
        })
      }
    }

    return errors
  }
}

export default Enum
