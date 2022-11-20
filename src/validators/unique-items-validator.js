import utils from '../utils'

class UniqueItemsValidator {
  validate (key, schema, value, path) {
    const errors = []
    const isArrayType = schema.type === 'array'
    if (!isArrayType) return
    const uniqueItems = schema.uniqueItems
    const hasUniqueItemsConstrain = utils.isSet(uniqueItems) && utils.isBoolean(uniqueItems)
    if (!hasUniqueItemsConstrain) return
    const seen = {}
    let hasDuplicatedItems = false
    const field = schema.title || key

    for (let i = 0; i < value.length; i++) {
      const item = JSON.stringify(value[i])
      if (seen[item]) {
        hasDuplicatedItems = true
        break
      }
      seen[item] = true
    }

    const invalid = (hasUniqueItemsConstrain && hasDuplicatedItems)

    if (invalid) {
      errors.push({
        message: field + ' must have unique items',
        path: path
      })
    }

    return errors
  }
}

export default UniqueItemsValidator
