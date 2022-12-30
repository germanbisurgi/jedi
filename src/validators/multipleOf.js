import { isNumber } from '../utils'

class MultipleOf {
  validate (value, schema, key, path) {
    const errors = []

    if (isNumber(value) && schema.multipleOf()) {
      const isMultipleOf = (value / schema.multipleOf() === Math.floor(value / schema.multipleOf()))
      const invalid = (!isMultipleOf)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be multiple of ' + schema.multipleOf(),
          path: path
        })
      }
    }

    return errors
  }
}

export default MultipleOf
