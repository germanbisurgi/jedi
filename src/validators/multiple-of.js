import utils from '../utils'

class MultipleOf {
  validate (key, schema, value, path) {
    const errors = []
    const isNumericType = schema.type === 'number' || schema.type === 'integer'
    if (!isNumericType) return
    const multipleOf = schema.multipleOf
    const hasMultipleOfConstrain = utils.isSet(multipleOf) && utils.isNumber(multipleOf)
    if (!hasMultipleOfConstrain) return
    const isMultipleOf = (value / multipleOf === Math.floor(value / multipleOf))
    const invalid = (hasMultipleOfConstrain && !isMultipleOf)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must be multiple of ' + multipleOf,
        path: path
      })
    }

    return errors
  }
}

export default MultipleOf
