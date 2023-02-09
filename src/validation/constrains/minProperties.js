import { isObject, isSet } from '../../utils'

export const _minProperties = (validator, value, schema, key, path) => {
  const errors = []

  if (isObject(value) && isSet(schema.minProperties())) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount < schema.minProperties())

    if (invalid) {
      errors.push({
        message: 'Must have at least ' + schema.minProperties() + ' properties',
        path: path
      })
    }
  }

  return errors
}
