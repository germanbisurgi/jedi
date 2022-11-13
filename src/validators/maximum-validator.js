import utils from '../utils'

class MaximumValidator {
  validate (schema, value, path) {
    const errors = []
    const isNumericType = schema.type === 'number' || schema.type === 'integer'
    if (!isNumericType) return
    const exclusiveMaximum = schema.exclusiveMaximum
    const maximum = schema.maximum
    const hasMaximumConstrain = utils.isSet(maximum) && utils.isNumber(maximum)
    if (!hasMaximumConstrain) return
    const hasExclusiveMaximumConstrain = utils.isSet(exclusiveMaximum) && exclusiveMaximum === true
    const finalMaximum = hasExclusiveMaximumConstrain ? maximum - 1 : maximum
    const invalid = (hasMaximumConstrain && value > finalMaximum)

    if (invalid) {
      errors.push({
        message: 'Must be less than ' + finalMaximum,
        path: path
      })
    }

    return errors
  }
}

export default MaximumValidator