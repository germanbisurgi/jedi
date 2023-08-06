import { isArray, isObject, isSet, sortObject } from '../../utils'

export function uniqueItems (validator, value, schema, key, path) {
  const errors = []

  if (isArray(value) && isSet(schema.uniqueItems()) && schema.uniqueItems() === true) {
    const seen = []
    let hasDuplicatedItems = false

    for (let i = 0; i < value.length; i++) {
      let item = value[i]

      if (isObject(item)) {
        item = sortObject(item)
      }

      const itemStringified = JSON.stringify(item)
      hasDuplicatedItems = seen.some((seen) => seen === itemStringified)

      if (hasDuplicatedItems) {
        break
      } else {
        seen.push(itemStringified)
      }
    }

    const invalid = (hasDuplicatedItems)

    if (invalid) {
      errors.push({
        messages: ['Must have unique items'],
        path: path
      })
    }
  }

  return errors
}
