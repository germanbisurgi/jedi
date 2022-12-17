import utils from '../utils'

class MaxLengthValidator {
  validate (key, schema, value, path) {
    const errors = []
    const isStringType = schema.type === 'string'
    if (!isStringType) return
    const maxLength = schema.maxLength
    const hasMaxLengthConstrain = utils.isSet(maxLength) && utils.isNumber(maxLength)
    if (!hasMaxLengthConstrain) return
    const invalid = (hasMaxLengthConstrain && value.length > maxLength)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must be at most ' + maxLength + ' characters long',
        path: path
      })
    }

    return errors
  }
}

export default MaxLengthValidator
