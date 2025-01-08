import { isArray, isObject, isSet, sortObject } from '../../helpers/utils.js'
import { getSchemaUniqueItems } from '../../helpers/schema.js'

export function uniqueItems (validator, value, schema, key, path) {
  const errors = []
  const uniqueItems = getSchemaUniqueItems(schema)

  if (isArray(value) && isSet(uniqueItems) && uniqueItems === true) {
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
        messages: [
          validator.translator.translate('errorUniqueItems')
        ],
        path: path,
        constrain: 'uniqueItems'
      })
    }
  }

  return errors
}
