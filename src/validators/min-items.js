class MinItems {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIs('array') && schema.minItems()) {
      const invalid = (value.length < schema.minItems())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at least ' + schema.minItems() + ' items',
          path: path
        })
      }
    }

    return errors
  }
}

export default MinItems
