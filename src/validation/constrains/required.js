import { isObject, isSet } from '../../helpers/utils'
import { getSchemaRequired } from '../../helpers/schema'

export function required (validator, value, schema, key, path) {
  const errors = []
  const schemaRequired = getSchemaRequired(schema)

  if (isObject(value) && isSet(schemaRequired)) {
    const missingProperties = []
    const keys = Object.keys(value)

    schemaRequired.forEach((key) => {
      if (!keys.includes(key)) {
        missingProperties.push(key)
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        messages: ['Must have the required properties: ' + missingProperties.join(', ')],
        path: path
      })
    }
  }

  return errors
}
