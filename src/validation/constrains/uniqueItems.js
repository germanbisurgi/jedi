import { isArray, isObject, isSet, sortObject } from '../../helpers/utils'
import { getSchemaUniqueItems } from '../../helpers/schema'
import { i18n } from '../../i18n'

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
          i18n.errorUniqueItems
        ],
        path: path
      })
    }
  }

  return errors
}
