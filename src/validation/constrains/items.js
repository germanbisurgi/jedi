import { isArray, isSet } from '../../utils'

export const items = (validator, value, schema, key, path) => {
  const errors = []

  // todo if array length is > prefixItems.length
  if (isArray(value) && isSet(schema.items())) {
    const prefixItemsSchemasCount = isSet(schema.prefixItems()) ? schema.prefixItems().length : 0

    if (schema.items() === false && value.length > 0 && value.length > prefixItemsSchemasCount) {
      errors.push({
        message: 'Schema always fails validation.',
        path: path
      })
    }
  }

  return errors
}
