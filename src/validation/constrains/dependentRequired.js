import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils.js'
import { getSchemaDependentRequired } from '../../helpers/schema.js'

export function dependentRequired (validator, value, schema, key, path) {
  const errors = []
  const dependentRequired = getSchemaDependentRequired(schema)

  if (isObject(value) && isSet(dependentRequired)) {
    let missingProperties = []

    Object.keys(dependentRequired).forEach((key) => {
      if (isSet(value[key])) {
        const requiredProperties = dependentRequired[key]

        missingProperties = requiredProperties.filter((property) => {
          return !hasOwn(value, property)
        })
      }
    })

    const invalid = missingProperties.length > 0

    if (invalid) {
      errors.push({
        path: path,
        constraint: 'dependentRequired',
        messages: [
          compileTemplate(validator.translator.translate('errorDependentRequired'), {
            dependentRequired: missingProperties.join(', ')
          })
        ]
      })
    }
  }

  return errors
}
