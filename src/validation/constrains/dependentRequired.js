import { hasOwn, isObject, isSet } from '../../helpers/utils'
import { getSchemaDependentRequired } from '../../helpers/schema'

export function dependentRequired (validator, value, schema, key, path) {
  const errors = []
  const schemaDependentRequired = getSchemaDependentRequired(schema)

  if (isObject(value) && isSet(schemaDependentRequired)) {
    let missingProperties = []

    Object.keys(schemaDependentRequired).forEach((key) => {
      if (isSet(value[key])) {
        const requiredProperties = schemaDependentRequired[key]

        missingProperties = requiredProperties.filter((property) => {
          return !hasOwn(value, property)
        })
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        messages: [
          'Must have the required properties: ' + missingProperties.join(', ')
        ],
        path: path
      })
    }
  }

  return errors
}
