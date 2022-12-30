import { isObject } from '../utils'

class MinProperties {
  validate (value, schema, key, path) {
    const errors = []

    if (isObject(value) && schema.minProperties()) {
      const propertiesCount = Object.keys(value).length
      const invalid = (propertiesCount < schema.minProperties())

      if (invalid) {
        const field = schema.title() ? schema.title() : key

        errors.push({
          message: field + ' must have at least ' + schema.minProperties() + ' properties',
          path: path
        })
      }
    }

    return errors
  }
}

export default MinProperties
