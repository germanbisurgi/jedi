import { isArray, isObject, isSet, sortObject } from '../../helpers/utils.js'
import { getSchemaUniqueItems } from '../../helpers/schema.js'

export function uniqueItems (context) {
  const errors = []
  const uniqueItems = getSchemaUniqueItems(context.schema)

  if (isArray(context.value) && isSet(uniqueItems) && uniqueItems === true) {
    const seen = []
    let hasDuplicatedItems = false

    for (let i = 0; i < context.value.length; i++) {
      let item = context.value[i]

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
        type: 'error',
        path: context.path,
        constraint: 'uniqueItems',
        messages: [
          context.translator.translate('errorUniqueItems')
        ]
      })
    }
  }

  return errors
}
