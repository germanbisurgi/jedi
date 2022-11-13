import utils from '../utils'

class MaxLengthValidator {
  constructor () {
    this.errors = []
  }

  validate (schema, value, path) {
    this.errors = []
    const isStringType = schema.type === 'string'
    if (!isStringType) return
    const maxLength = schema.maxLength
    const hasMaxLengthConstrain = utils.isSet(maxLength) && utils.isNumber(maxLength)
    if (!hasMaxLengthConstrain) return
    const invalid = (hasMaxLengthConstrain && value.length > maxLength)

    if (invalid) {
      this.errors.push({
        message: 'Must be at most ' + maxLength + ' characters long',
        path: path
      })
    }

    return this.errors
  }
}

export default MaxLengthValidator
