import { isArray, isSet } from '../../utils'

export const uniqueItems = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && isSet(schema.uniqueItems())) {
    const seen = {}
    let hasDuplicatedItems = false

    for (let i = 0; i < value.length; i++) {
      const item = JSON.stringify(value[i])
      if (seen[item]) {
        hasDuplicatedItems = true
        break
      }
      seen[item] = true
    }

    const invalid = (hasDuplicatedItems)

    if (invalid) {
      errors.push({
        message: 'Must have unique items',
        path: path
      })
    }
  }

  return errors
}
