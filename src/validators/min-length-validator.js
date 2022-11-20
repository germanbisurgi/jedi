import utils from '../utils'

class MinLengthValidator {
  validate (key, schema, value, path) {
    const errors = []
    const isStringType = schema.type === 'string'
    if (!isStringType) return
    const minLength = schema.minLength
    const hasMinLengthConstrain = utils.isSet(minLength) && utils.isNumber(minLength)
    if (!hasMinLengthConstrain) return
    const invalid = (hasMinLengthConstrain && value.length < minLength)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must be at least ' + minLength + ' characters long',
        path: path
      })
    }

    return errors
  }
}

export default MinLengthValidator
