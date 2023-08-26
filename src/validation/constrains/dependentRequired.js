import { compileTemplate, hasOwn, isObject, isSet } from '../../helpers/utils'
import { getSchemaDependentRequired } from '../../helpers/schema'
import { i18n } from '../../i18n'

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
        messages: [
          compileTemplate(i18n.errorDependentRequired, {
            dependentRequired: missingProperties.join(', ')
          })
        ],
        path: path
      })
    }
  }

  return errors
}
