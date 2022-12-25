import utils from '../utils'

class Minimum {
  validate (key, schema, value, path) {
    const errors = []
    const isNumericType = schema.type === 'number' || schema.type === 'integer'
    if (!isNumericType) return
    const exclusiveMinimum = schema.exclusiveMinimum
    const minimum = schema.minimum
    const hasMinimumConstrain = utils.isSet(minimum) && utils.isNumber(minimum)
    if (!hasMinimumConstrain) return
    const hasExclusiveMinimumConstrain = utils.isSet(exclusiveMinimum) && exclusiveMinimum === true
    const finalMinimum = hasExclusiveMinimumConstrain ? minimum + 1 : minimum
    const invalid = (hasMinimumConstrain && value < finalMinimum)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must be at least ' + finalMinimum,
        path: path
      })
    }

    return errors
  }
}

export default Minimum
