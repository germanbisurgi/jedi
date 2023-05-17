import { isObject, isSet } from '../../utils'

export const required = (validator, value, schema, key, path) => {
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
      errors.push({
        message: 'Must have the required properties: ' + missingProperties.join(', '),
        path: path
      })
    }
  }

  return errors
}
