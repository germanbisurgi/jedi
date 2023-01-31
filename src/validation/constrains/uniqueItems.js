import { isArray } from '../../utils'

export const _uniqueItems = (validator, value, schema, key, path) => {
  const errors = []

  if (isArray(value) && schema.uniqueItems()) {
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
      const field = schema.title() ? schema.title() : key

      errors.push({
        message: field + ' must have unique items',
        path: path
      })
    }
  }

  return errors
}