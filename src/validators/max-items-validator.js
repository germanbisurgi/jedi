import utils from '../utils'

class MaxItemsValidator {
  constructor () {
    this.errors = []
  }

  validate (key, schema, value, path) {
    this.errors = []
    const isArrayType = schema.type === 'array'
    if (!isArrayType) return
    const maxItems = schema.maxItems
    const hasMaxItemsConstrain = utils.isSet(maxItems) && utils.isNumber(maxItems)
    if (!hasMaxItemsConstrain) return
    const invalid = (hasMaxItemsConstrain && value.length > maxItems)
    const field = schema.title || key

    if (invalid) {
      this.errors.push({
        message: field + ' must have at most ' + maxItems + ' items',
        path: path
      })
    }

    return this.errors
  }
}

export default MaxItemsValidator
