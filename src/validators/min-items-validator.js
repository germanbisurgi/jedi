import utils from '../utils'

class MinItemsValidator {
  validate (schema, value, path) {
    const errors = []
    const isArrayType = schema.type === 'array'
    if (!isArrayType) return
    const minItems = schema.minItems
    const hasMinItemsConstrain = utils.isSet(minItems) && utils.isNumber(minItems)
    if (!hasMinItemsConstrain) return
    const invalid = (hasMinItemsConstrain && value.length < minItems)

    if (invalid) {
      errors.push({
        message: 'Must have at least ' + minItems + ' items',
        path: path
      })
    }

    return errors
  }
}

export default MinItemsValidator
