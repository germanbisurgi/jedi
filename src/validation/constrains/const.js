export const _const = (validator, value, schema, key, path) => {
  const errors = []

  if (schema.const()) {
    const valueIsNotEqualConst = (JSON.stringify(value) !== JSON.stringify(schema.const()))
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must have value: ' + JSON.stringify(schema.const()),
        path: path
      })
    }
  }

  return errors
}
