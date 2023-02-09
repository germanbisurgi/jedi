import { isObject, isSet } from '../../utils'

export const _maxProperties = (validator, value, schema, key, path) => {
  const errors = []

  if (isObject(value) && isSet(schema.maxProperties())) {
    const propertiesCount = Object.keys(value).length
    const invalid = (propertiesCount > schema.maxProperties())

    if (invalid) {
      errors.push({
        message: 'Must have at most ' + schema.maxProperties() + ' properties',
        path: path
      })
    }
  }

  return errors
}
