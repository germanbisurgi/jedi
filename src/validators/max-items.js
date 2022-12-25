import utils from '../utils'

class MaxItems {
  validate (key, schema, value, path) {
    const errors = []
    const isArrayType = schema.type === 'array'
    if (!isArrayType) return
    const maxItems = schema.maxItems
    const hasMaxItemsConstrain = utils.isSet(maxItems) && utils.isNumber(maxItems)
    if (!hasMaxItemsConstrain) return
    const invalid = (hasMaxItemsConstrain && value.length > maxItems)
    const field = schema.title || key

    if (invalid) {
      errors.push({
        message: field + ' must have at most ' + maxItems + ' items',
        path: path
      })
    }

    return errors
  }
}

export default MaxItems
