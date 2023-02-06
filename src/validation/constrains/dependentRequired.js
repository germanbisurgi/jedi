import { isObject, isSet } from '../../utils'

export const _dependentRequired = (validator, value, schema, key, path) => {
  const errors = []

  if (isObject(value) && isSet(schema.dependentRequired())) {
    let missingProperties = []

    Object.keys(schema.dependentRequired()).forEach((key) => {
      if (isSet(value[key])) {
        const requiredProperties = schema.dependentRequired()[key]

        missingProperties = requiredProperties.filter((property) => {
          return !Object.hasOwn(value, property)
        })
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      const field = isSet(schema.title()) ? schema.title() : key

      errors.push({
        message: field + '  is missing the required properties: ' + missingProperties.join(', '),
        path: path
      })
    }
  }

  return errors
}
