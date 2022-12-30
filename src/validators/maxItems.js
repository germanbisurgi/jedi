import { isArray } from '../utils'

class MaxItems {
  validate (value, schema, key, path) {
    const errors = []

    if (isArray(value) && schema.maxItems()) {
      const invalid = (value.length > schema.maxItems())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at most ' + schema.maxItems() + ' items',
          path: path
        })
      }
    }

    return errors
  }
}

export default MaxItems
