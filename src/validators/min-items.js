import utils from '../utils'

class MinItems {
  validate (key, schema, value, path) {
    const errors = []
    const isArrayType = schema.type === 'array'
    if (!isArrayType) return
    const minItems = schema.minItems
    const hasMinItemsConstrain = utils.isSet(minItems) && utils.isNumber(minItems)
    if (!hasMinItemsConstrain) return
    const invalid = (hasMinItemsConstrain && value.length < minItems)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must have at least ' + minItems + ' items',
        path: path
      })
    }

    return errors
  }
}

export default MinItems
