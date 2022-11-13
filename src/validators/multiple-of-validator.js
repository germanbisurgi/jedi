import utils from '../utils'

class MultipleOfValidator {
  validate (schema, value, path) {
    const errors = []
    const isNumericType = schema.type === 'number' || schema.type === 'integer'
    if (!isNumericType) return
    const multipleOf = schema.multipleOf
    const hasMultipleOfConstrain = utils.isSet(multipleOf) && utils.isNumber(multipleOf)
    if (!hasMultipleOfConstrain) return
    const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
    const invalid = (hasMultipleOfConstrain && !isMultipleOf)

    if (invalid) {
      errors.push({
        message: 'Must be multiple of ' + multipleOf,
        path: path
      })
    }

    return errors
  }
}

export default MultipleOfValidator
