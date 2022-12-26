class MaxItems {
  validate (key, schema, value, path) {
    const errors = []

    if (schema.typeIs('array') && schema.maxItems()) {
      const invalid = (value.length > schema.maxItems())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at most ' + schema.maxItems() + ' items',
          path: path
        })
      }
    }

    return errors
  }
}

export default MaxItems
