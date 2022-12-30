import { isString } from '../utils'

class Pattern {
  validate (value, schema, key, path) {
    const errors = []

    if (isString(value) && schema.pattern()) {
      const regexp = new RegExp(schema.pattern())
      const invalid = !regexp.test(value)

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must be the pattern: ' + schema.pattern(),
          path: path
        })
      }
    }

    return errors
  }
}

export default Pattern
