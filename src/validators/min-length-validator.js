import utils from '../utils'

class MinLengthValidator {
  validate (schema, value, path) {
    const errors = []
    const isStringType = schema.type === 'string'
    if (!isStringType) return
    const minLength = schema.minLength
    const hasMinLengthConstrain = utils.isSet(minLength) && utils.isNumber(minLength)
    if (!hasMinLengthConstrain) return
    const invalid = (hasMinLengthConstrain && value.length < minLength)

    if (invalid) {
      errors.push({
        message: 'Must be at least ' + minLength + ' characters long',
        path: path
      })
    }

    return errors
  }
}

export default MinLengthValidator
