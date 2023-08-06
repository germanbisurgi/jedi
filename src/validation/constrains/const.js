import { isSet, different } from '../../utils'

export function _const (validator, value, schema, key, path) {
  const errors = []
  if (isSet(schema.const())) {
    const valueIsNotEqualConst = different(value, schema.const())
    const invalid = (valueIsNotEqualConst)

    if (invalid) {
      errors.push({
        messages: [
          'Must be: ' + JSON.stringify(schema.const())
        ],
        path: path
      })
    }
  }

  return errors
}
