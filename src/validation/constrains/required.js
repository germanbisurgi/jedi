import { isObject, isSet } from '../../utils'

export const _required = (validator, value, schema, key, path) => {
  const errors = []

  if (isObject(value) && isSet(schema.required())) {
    const missingProperties = []
    const keys = Object.keys(value)

    schema.required().forEach((key) => {
      if (!keys.includes(key)) {
        missingProperties.push(key)
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
