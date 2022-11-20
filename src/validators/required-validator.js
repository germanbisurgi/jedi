import utils from '../utils'

class RequiredValidator {
  validate (key, schema, value, path) {
    const errors = []
    const hasRequiredProperties = utils.isArray(schema.required)
    const missingProperties = []
    const field = schema.title || key

    if (hasRequiredProperties) {
      const keys = Object.keys(value)

      schema.required.forEach((key) => {
        if (!keys.includes(key)) {
          missingProperties.push(key)
        }
      })
    }

    const invalid = missingProperties.length > 0

    if (invalid) {
      missingProperties.forEach((property) => {
        errors.push({
          message: field + '  is missing the required property: ' + property,
          path: path
        })
      })
    }

    return errors
  }
}

export default RequiredValidator
