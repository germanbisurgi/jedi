import { isSet, different } from '../../utils'

export const _const = (validator, value, schema, key, path) => {
  const errors = []
  if (isSet(schema.const())) {
    const valueIsNotEqualConst = different(value, schema.const())
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
