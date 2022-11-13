import utils from '../utils'

class MaxItemsValidator {
  constructor () {
    this.errors = []
  }

  validate (schema, value, path) {
    this.errors = []
    const isArrayType = schema.type === 'array'
    if (!isArrayType) return
    const maxItems = schema.maxItems
    const hasMaxItemsConstrain = utils.isSet(maxItems) && utils.isNumber(maxItems)
    if (!hasMaxItemsConstrain) return
    const invalid = (hasMaxItemsConstrain && value.length > maxItems)

    if (invalid) {
      this.errors.push({
        message: 'Must have at most ' + maxItems + ' items',
        path: path
      })
    }

    return this.errors
  }
}

export default MaxItemsValidator
